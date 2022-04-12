//CRUD Create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id.getTimestamp());
console.log(id.id);

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			return console.log("Unable to connect to database!");
		}
		console.log("Connected Correctly");
		const db = client.db(databaseName);

		// Start to interact with the database

		db.collection("tasks")
			.updateMany(
				{
					completed: false,
				},
				{
					$set: {
						completed: true,
					},
				}
			)
			.then((result) => {
				console.log(result.modifiedCount);
			})
			.catch((error) => {
				console.log(error);
			});
	}
);
