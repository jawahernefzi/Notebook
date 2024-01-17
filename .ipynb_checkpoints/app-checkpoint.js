const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://jawahernefzi888:ks5o5qdIcBoJYLqn@cluster0.u2taqjl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  const database = client.db('management');
  const peopleCollection = database.collection('people');

function displayPeople() {
    peopleCollection.find({}).toArray((err, documents) => {
      if (err) {
        console.log(err);
      } else {
        for (const document of documents) {
          console.log(document);
        }
      }
    });
  }
  displayPeople();
  client.close();
});
