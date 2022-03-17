const db = require("../../shared/db");

exports.getUser = async (userId) => {
  const result = (await db()).collection("users").findOne({ userId: userId });
  return result;
};

exports.addUser = async (data) => {
  try {
    const data = (await db()).collection("users").insertOne(data);
    return "Data added successfully";
  } catch (err) {
    console.log(err);
  }
};
