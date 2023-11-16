const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
});
// console.log(db);
// signup 
// app.get('/', (req, res) => {
//   return res.json('from backend side')
// })

app.post('/Signup', (req, res) => {
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password
  ];
  // console.log(values);
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("error");
    }
    return res.json(data);
  });
});


app.post('/Login', (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  // console.log(values);
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("error");
    }
    if (data.length > 0) {
      return res.json("success")
    } else {
      return res.json('Faile')
    }
  });
});
// console.log(db)
// Login

app.get('/home', (req, res) => {
  return res.json('success')
})


db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.listen(8081, () => {
  console.log("listening on");
});
