var express = require('express');
var bodyParser = require('body-parser');
var {
    ObjectID
} = require('mongodb');

var {
    mongoose
} = require('./db/mongoose');
var {
    Todo
} = require('./models/todo');
var {
    User
} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    })
});

//GET /todos/1234
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // valid id usig isValid
    if (!ObjectID.isValid(id)) {
        // 404 - send back empty send
        return res.status(404).send();
    }
    // findById
    Todo.findById(id).then((todo) => {
        // success
        // if no todo - send back 404 with empty body
        if (!todo) {
            return res.status(404).send();
        }
        // if todo - send it back
        res.send({
            todo
        });


    }).catch((e) => {
        // error
        // 400 - and send empty body back
        res.status(404).send();
    });


})

app.delete('/todos/:id', (req, res)=>{
  // get the id
    var id = req.params.id;
  // validate the id -> not valid? return 404
    if(!ObjectID.isValid(id)){
      return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo)=>{
      if(!todo){
        return res.status(404).send();
      }

      res.send(todo);
    }).catch((e) =>{
      res.status(404).send();
    });
});

app.listen(port, () => {
    console.log(`Starting on port ${port}`);
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
