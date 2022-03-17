const db = require("../../shared/db");

exports.getInternships = async () => {
  const data = (await db()).collection("internships").findOne();
  return data;
};

exports.addInternship = async () => {
  const mockData = [];
  try {
    const data = (await db()).collection("internships").insertMany(mockData);
    return "Data added successfully";
  } catch (err) {
    console.log(err);
  }
};
