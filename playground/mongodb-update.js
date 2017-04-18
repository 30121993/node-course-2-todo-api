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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('58f597de107ab4e38a38844c')
    // }, {
    //     $set: {
    //         completed: true,
    //         text: 'Thai Son'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58f58be3cfcaec36c4f60c64')
    }, {
        $set: {
            name: 'Duy Long'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
