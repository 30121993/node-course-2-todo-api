// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDb server');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if (err) {
    //         console.log('Unable to delete ', err);
    //     }
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to deleteOne', err);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({
    //     name: 'TUAN'
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('58f58dcb9e5de00d1c6ef65d')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});
