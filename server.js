const express = require("express");
const path = require("path");
const {
  addPost,
  addVideo,
  getContent,
  seedContent,
} = require("./src/storage");

const app = express();
const port = process.env.PORT || 3000;

seedContent();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const content = getContent();

  res.render("index", {
    ...content,
    message: req.query.message || "",
    error: req.query.error || "",
    currentYear: new Date().getFullYear(),
  });
});

app.post("/videos", (req, res) => {
  try {
    addVideo(req.body);
    res.redirect("/?message=video-publicado#videos");
  } catch (error) {
    res.redirect(`/?error=${encodeURIComponent(error.message)}#videos`);
  }
});

app.post("/opinioes", (req, res) => {
  try {
    addPost(req.body);
    res.redirect("/?message=opiniao-publicada#blog");
  } catch (error) {
    res.redirect(`/?error=${encodeURIComponent(error.message)}#blog`);
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Locmais rodando em http://localhost:${port}`);
  });
}

module.exports = app;
