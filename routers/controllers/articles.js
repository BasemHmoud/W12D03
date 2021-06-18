const articlesModel = require("./../../db/models/articles");
const db = require("./../../db/db");
const getAllArticles = (req, res) => {
  const query = `SELECT * FROM articles WHERE is_deleted=0`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const getArticlesByAuthor = (req, res) => {
  const author = req.query.author;

  if (!author) return res.status(404).json("not found");
  const query = "SELECT * FROM articles WHERE author_id=? AND is_deleted=0";
  const data = [author];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const getAnArticleById = (req, res) => {
  const _id = req.params.id;

  if (!_id) return res.status(404).json("not found");

  const query = "SELECT * FROM articles WHERE id=${_id}";
  const author_id = [_id];
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const createNewArticle = (req, res) => {
  const { title, description, author } = req.body;
  const query = `INSERT INTO articles (title, description, author) VALUES (?, ?, ?, ?)`;
  const data = [title, description, author];
  db.query(query, data, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json(results);
  });
};

const updateAnArticleById = (req, res) => {
  const id = req.params.id;
  const { title, description, author } = req.body;
  const query = `UPDATE articles SET title=?,description=?, author=?, WHERE id=?`;
  const data = [title, description, author, id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const deleteArticleById = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE articles SET is_deleted=1 Where id = ?`;
  const data = [id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const deleteArticlesByAuthor = (req, res) => {
  const author = req.body.author;

  const query = `UPDATE articles SET is_deleted=1 Where author_id = ?`;
  const data = [author];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

module.exports = {
  getAllArticles,
  getArticlesByAuthor,
  getAnArticleById,
  createNewArticle,
  updateAnArticleById,
  deleteArticleById,
  deleteArticlesByAuthor,
};
