module.exports = function (app) {
  let token = null
  const user = {
    user: 'user',
    password: '123'
  }

  app.post('/login', (req, res) => {
    const creds = req.body || {}
    if (creds.user === user.user && creds.password === user.password) {
      // making token pseudorandom at this point
      token = 'token' + (+new Date());
      return res.json({
        data: token
      })
    }
    res.status(403).send({error:'invalid credentials'})
  })

  app.get('/hello', function (req, res) {
    if (isLoggedIn(req)) {
      return res.json({
        data: 'hello'
      })
    }
    res.status(401).send({error:'unauthorized'})
  })

  app.get('/logout', function (req, res) {
    if (isLoggedIn(req)) {
      token = null
      return res.json({
        data: 'logged out successfully'
      })
    }
    res.status(401).send({error:'unauthorized'})
  })

  function isLoggedIn (req) {
    return req.headers.authorization === `Bearer ${token}`
  }
}

