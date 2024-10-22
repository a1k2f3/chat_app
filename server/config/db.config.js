// Make a DB of "UnityChatAppDB" this name in phpmyadmin.
const newLocal = "unitychatappdb";
// change port according to your own.
// This is the XAMPP port.
// the port displayed on XAMPP mysql is the port to put here.
const newLocal_1 = 3308;

module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "",
  DB: newLocal,
  PORT: newLocal_1,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
