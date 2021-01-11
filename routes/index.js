const expres = require("express");
const router = expres.Router();
const Book = require("../models/book");

router.get("/", async (req, res) => {
  let books;
  try {
    // affiche les 10 livres ajoutés récemment en ordre décroissant
    books = await Book.find().sort({ createdAt: "desc" }).limit(10).exec();
  } catch {
    books = [];
  }
  res.render("index", { books: books });
});

module.exports = router;
