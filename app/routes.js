module.exports = function (app) {
  const token = 'token'

  // show the home page (will also have our login links)
  app.get('/', function (req, res) {
    res.render('index.ejs')
  })

  // LOGOUT ==============================
  app.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  // process the login form
  app.post('/login', (req, res) => {
    const creds = req.body
    if (creds.user === 'user' && creds.password === '123') {
      return res.json({
        token
      })
    }
    res.status(401).send('invalid creds')
  })

  // process the signup form
  app.get('/hello', function (req, res) {
    if (isLoggedIn(req)) {
      return res.json({
        hello: 'hello'
      })
    }
    res.status(401).send('unauthorized')
  })

  // facebook -------------------------------

}

// route middleware to ensure user is logged in
function isLoggedIn (req) {
  return req.headers.authorization === `Bearer ${token}`
}

