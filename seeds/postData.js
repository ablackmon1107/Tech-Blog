const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "React",
    "postContent": "Today, we will talk about React.",
    "userId": 1
  },
  {
    "postTitle": "Handlebars",
    "postContent": "Today, I will show you how to use Handlebars",
    "userId": 2
  },
  {
    "postTitle": "Service-Now",
    "postContent": "Today, I will help you use Service Now",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;