"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedin) {
        next();
        return;
    }
    res.status(403);
    res.send(`<div><h1>Not allowed</h1></div>`);
}
router.get('/', (req, res) => {
    if (req.session && req.session.loggedin) {
        res.send(`
    <div>
      <h1>You are logged in</h1>
      <a href="/logout">Logout</a>
    </div>
  `);
    }
    else {
        res.send(`
    <div>
      <h1>You are not logged in</h1>
      <a href="/login">Login</a>
    </div>
  `);
    }
});
router.get('/login', (req, res) => {
    res.send(`
    <form method="POST">
      <div>
        <label>Email:</label>
        <input name="email" />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'mail@mail.com' && password === 'password') {
        req.session = { loggedin: true };
        res.redirect('/');
    }
    else {
        res.send(`<h1>Invalid email or password</h1>`);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send(`
  <div>
    <h1>Welcome to protected path logged in user !</h1>
  <div>
  `);
});
