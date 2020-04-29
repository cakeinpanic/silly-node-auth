## EXTRA simple nodejs server with auth

Have you ever tried to implement authentication on frontend when backend is not ready?
 
Or try to understand how auth should work at all? 

*This package is for you!*

* ✔️ No database required
* ✔️ Only one hardcoded user
* ✔️ Super small readable code
* ✔️ Designed to play with authentication on frontend


How to use it?
1. `npm i`
2. `npm start`
3. server starts on port 8080 (can be changed in package.json)

This silly backend supports only three requests:
### Login
```
POST http://localhost:8080/login 
with data: 
{
    user: 'user',
    password: '123'
}
```
server would respond with token.
 
This token must be sent in `authorization` header for all other requests. [How to do it](https://stackoverflow.com/a/52328881/4166537)

### Get data
This server has only one request: 
```
GET http://localhost:8080/hello
```
which would fail if proper token got from `/login` is not provided


### Logout
```
GET http://localhost:8080/logout
```
This request also requires token as `/hello` and would invalidate it, making this token useless. So you would need to login again


