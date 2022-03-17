const db = require("../../shared/db");

exports.getInternships = async (query) => {
  const { location, preference } = query;

  result = [];
  const data = (await db()).collection("internships").find();
  await data.forEach((item) => result.push(item));
  return result;
};

exports.addInternship = async (data) => {
  try {
    const data = (await db()).collection("internships").insertOne(data);
    return "Data added successfully";
  } catch (err) {
    console.log(err);
  }
};
