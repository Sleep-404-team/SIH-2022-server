const MongoClient = require("mongodb").MongoClient;
const config = require("./config");

let db;

const InitalizeClient = async () => {
  const client = await MongoClient.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true,
  });
  console.log("Connected to MongoDB");
  return client.db("sih-preview");
};

module.exports = async () => {
  if (!db) {
    const db = await InitalizeClient();
    return db;
  } else {
    return db;
  }
};
