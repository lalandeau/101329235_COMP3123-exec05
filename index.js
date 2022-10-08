const { json } = require('express');
const express = require('express');
const app = express();
const router = express.Router();

/*
d - Create new html file name home.html 
d - add <h1> tag with message "Welcome to ExpressJs Tutorial"
d - Return home.html page to client
*/
router.get('/home', (req,res) => {
    res.sendFile(__dirname + '/home.html');
});


/*
d - Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  var user = require('./user.json')
  // res.send('This is profile router');
  res.setHeader("content-type", "application/json")
    .status(201)
    .send(JSON.stringify(user))
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/


router.get('/login', (req,res) => {
  const jsonData = require('./user.json')
  // res.send('This is login router');
  const username = jsonData.username
  const password = jsonData.password
  if (username === jsonData.username 
    && password === jsonData.password) {
    res.status(200).json({
      status: true,
      message: "User is valid"
    })
  } else if (username === jsonData.username) {
    res.status(200).json({
      status: false,
      message: "Password is invalid"
    })
  } else {
    res.status(200).json({
      status: false,
      message: "Username is invalid"
    })
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  const jsonData = require('./user.json')
  const username = jsonData.username 
  res.send(`<b>${username} successfully logout</b>`);
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));