const http = require('http');
const express = require("express");
const cors = require("cors"); 
const mysql=require('mysql');
const bodyParser = require("body-parser");
const socketIO = require("socket.io");
const PORT = 4500;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use(cors());

app.use(express.json());
// app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "akif5200",  // Add the password if your MySQL setup requires one
  database: "unity_chat"
});
db.connect(err => {
  if (err) {
      console.error("Connection failed", err);
      return;
  } else {
      console.log("Successfully connected to the database.");
  }
});

app.get("/unity_chat", (req, res) => {
  res.send("helloword");
});

app.post('/unity_chat', (req, res) => {
  const sqlquery = "INSERT INTO user_s(user_name,user_password )Values(?,?)";
  // ,country_code,user_num
  const values = [
    req.body.user_name,
    req.body.user_password,
     
       ];
  db.query(sqlquery, values, (err, data) => {
      if (err) {
          console.error("Error executing query", err);
          return res.status(500).json(err);
      }
      return res.json(data);
  });
});
// app.post('/user_s', (req, res) => {
//   const sqlquery = " select*from user_s where  `user_name`=? and `user_password`=? ";
//   // ,country_code,user_num
//   const values = [
//     req.body.user_name,
//     req.body.user_password,
//        ];
//   db.query(sqlquery, values, (err, data) => {
//       if (err) {
//           console.error("Error executing query", err);
//           return res.status(500).json(err);
//       }
//       return res.json(data);
//   });
// });
app.get("/numbers", (req, res) => {
  res.send("helloword");
});
// app.post('/numbers', (req, res) => {
//   const sqlquery = "INSERT INTO  numbers( user_num ,country_code )Values(?,?)";
 
//   const values = [
    
//     req.body.user_num,
//     req.body.country_code
//        ];
//   db.query(sqlquery, values, (err, data) => {
//       if (err) {
//           console.error("Error executing query", err);
//           return res.status(500).json(err);
//       }
//       return res.json(data);
//   });
// });
// app.post('/message', (req, res) => {
//   const sqlquery = "INSERT INTO  message(  user_message )Values(?)";

//   const values = [    
//     req.body.user_message,
//        ];
//   db.query(sqlquery, values, (err, data) => {
//       if (err) {
//           console.error("Error executing query", err);
//           return res.status(500).json(err);
//       }
//       return res.json(data);
//   });
// });

app.get('/message', (req, res) => {
  const sqlquery = "select*from  message";


  db.query(sqlquery,  (err, data) => {
      if (err) {
          console.error("Error executing query", err);
          return res.status(500).json(err);
      }
      return res.json(data);
  });
});
 const users = {};
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    console.log(`${user} has joined`);
    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: `${users[socket.id]} has joined`,
    });
    socket.emit("welcome", {
      user: "Admin",
      message: `Welcome to the chat, ${users[socket.id]}`,
    });
  });
  socket.on("message", ({ message, id }) => {
    io.emit("sendMessage", { user: users[id], message, id });
  });
  socket.on("disconnect", () => {
    socket.broadcast.emit("leave", {
      user: "Admin",
      message: `${users[socket.id]} User has left`,
    });
    console.log("User disconnected");
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
