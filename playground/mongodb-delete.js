//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to the MongoDbB server');
	}
	console.log('Connected to MongoDB server');

	//deleteMany
	const db = client.db('TodoApp')
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });


	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });


	//findOneAndDelete
	db.collection('Todos').deleteMany({completed: false}).then((result) => {
		console.log(result);
	});

	db.collection('Users').findOneAndDelete({_id: new ObjectID("5c868c5c654e6803840cfe2d")}).then((results) => {
		console.log(JSON.stringify(results, undefined, 2));
	});

	//db.close();
});