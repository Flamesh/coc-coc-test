const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./users.json");
const db = lowdb(adapter);
const TABLENAME = "users";

const getUserByEmail = async (email) => {
  try {
    const data = await db.get(TABLENAME).find({ email: email }).value();
    return data;
  } catch {
    return null;
  }
};

module.exports = {
  getUserByEmail,
};
