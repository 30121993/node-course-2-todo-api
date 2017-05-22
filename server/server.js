var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    var todo = new Todo({
      text: req.body.text
    });
    todo.save().then((doc)=>{
      res.send(doc);
    }, (e)=>{
      res.status(400).send(e);
    });
});


app.get('/todos', (req, res) =>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e) =>{
    res.status(400).send(e);
  })
});


app.listen(3000, ()=>{
  console.log('Starting on port 3000');
});


module.exports.app = app;

// save new something
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//     console.log('Saved todo ', doc);
// }, (e) => {
//     console.log('Unable to save Todo ', e);
// });

// var otherTodo = new Todo({
//     text: true
//     //completed: true,
//     //completedAt: 123
// });
//
// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save Todo ', e);
// });

// User
// email - require it - trim it - set type - set minlenght of 1



// var user = new User({
//   email: 'longtd3012@gmail.com      '
// });
//
// user.save().then((doc) => {
//     console.log('User saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });
