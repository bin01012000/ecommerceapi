import mysql from "mysql";
import url from "url";
import dotenv from "dotenv";

dotenv.config();

var con = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  port: process.env.MYSQL_ADDON_PORT,
});

export const getFav = (req, res) => {
  const q = url.parse(req.url, true).query;
  const email = q.email;
  con.connect((err) => {
    con.query(
      "select * from fav join products on fav.id = products.id where fav.email = ?",
      [email],
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  });
};

export const getFavCheck = (req, res) => {
  const q = url.parse(req.url, true).query;
  const body = req.body;
  const email = q.email;
  const id = q.id;
  con.connect((err) => {
    con.query(
      "select * from fav where email = ? and id = ?",
      [email, id],
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  });
};
