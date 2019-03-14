//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to the MongoDbB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp')

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("5c8a9cceb853a246697c5f00")
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID ('5c869951e0ee7803b87db221')
	}, {
		$set: {
			name: 'NabaB'
		}, 
		$inc: {
			age:1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	
	//db.close();
});