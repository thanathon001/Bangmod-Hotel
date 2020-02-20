const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db.js');

global.loggedin =  false;
global.error = false;
global.error2 = false;
const app = express();
const index = require('./index.js');
const routers = require('./regist.js');
const routers2 = require('./searching.js');
const routers3 = require('./booking.js');
const router4= require('./profile.js');
const router5= require('./editProfile.js');
const router6= require('./delete.js');
const login = require('./log-in.js');
//const router6 = require('./resetPass.js');


app.use(express.static('views'));
app.use(index);
app.use(login);
app.use(routers);
app.use(routers2);
app.use(routers3);
app.use(router4);
app.use(router5);
app.use(router6);

app.listen(3000);
