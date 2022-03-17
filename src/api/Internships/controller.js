const db = require("../../shared/db");

exports.getInternships = async (query) => {
  const { location, pref } = query;

  result = [];

  if (location) {
    const data = (await db())
      .collection("internships")
      .find({ location: location });
    await data.forEach((item) => result.push(item));
  } else if (pref) {
    const prefQuery = pref.split(",");
    const data = (await db())
      .collection("internships")
      .find({ tags: { $in: prefQuery } });
    await data.forEach((item) => result.push(item));
  } else {
    const data = (await db()).collection("internships").find();
    await data.forEach((item) => result.push(item));
  }

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
