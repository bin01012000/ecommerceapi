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

export const getAllProduct = (req, res) => {
  con.connect((err) => {
    con.query("select * from products", (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
};

export const getProduct = (req, res) => {
  const q = url.parse(req.url, true).query;
  const id = q.id;
  con.connect((err) => {
    con.query("select * from products where id = ?", [id], (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
};

export const getFourProduct = (req, res) => {
  const q = url.parse(req.url, true).query;
  const id = q.id;
  con.connect((err) => {
    con.query("select * from products limit 4", [id], (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
};

export const searchAll = (req, res) => {
  const q = url.parse(req.url, true).query;
  const kw = "%" + q.kw + "%";
  con.connect((err) => {
    con.query(
      "select * from products where name like ? ",
      [kw, kw],
      (err, results) => {
        if (err) throw err;
        res.send(results);
      }
    );
  });
};

export const getProductByCate = (req, res) => {
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
