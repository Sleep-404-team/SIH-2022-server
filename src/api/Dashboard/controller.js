const db = require("../../shared/db");

exports.getUserDashbaord = async (userId) => {
  const result = (await db())
    .collection("dashboard")
    .findOne({ userId: userId });
  return result;
};

exports.updateUserDashbaord = async (data) => {
  try {
    const data = (await db()).collection("users").insertOne(data);
    return "Data added successfully";
  } catch (err) {
    console.log(err);
  }
};

exports.addUserDashbaord = async (data) => {
  try {
    const result = (await db()).collection("dashboard").insertOne(data);
    return "Data added successfully";
  } catch (err) {
    console.log(err);
  }
};
