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

	// db.collection('Todos').find({_id: new ObjectID('5c868ad096fa030373dcffa9')
	// }).toArray().then((docs) => {
	// 	console.log('TOdos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unale to fetch the tods:',err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unale to fetch the tods:',err);
	// });

	db.collection('Users').find({name: 'Naba'}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fectch the todos:', err);
	});

	

	//db.close();
});