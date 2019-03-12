//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Naba', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to the MongoDbB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp')

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));

	// });

	// db.collection('Users').insertOne({
	// 	name: 'Naba',
	// 	age: 21,
	// 	location: 'IIIT sricity'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Users', err);
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	client.close();
});