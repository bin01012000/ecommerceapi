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

export const getAllCategory = (req, res) => {
  con.connect((err) => {
    con.query("select * from category", (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
};

export const getFourCate = (req, res) => {
  con.connect((err) => {
    con.query(
      "select * from category where image is not null",
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  });
};

export const getCategory = (req, res) => {
  const q = url.parse(req.url, true).query;
  const id = q.idCate;
  con.connect((err) => {
    con.query(
      "select * from category where idCate = ?",
      [id],
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  });
};

export const getProductByCategory = (req, res) => {
  const q = url.parse(req.url, true).query;
  const id = q.idCate;
  con.connect((err) => {
    con.query(
      "select * from category join products on category.idCate = products.idCate where products.idCate = ?",
      [id],
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  });
};
