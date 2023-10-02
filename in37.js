function Blog(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const post = new Blog(
  "The Himalayas",
  "The Great Himalaya has a height around 8879meter.",
  "ajay"
);

console.log(post);
