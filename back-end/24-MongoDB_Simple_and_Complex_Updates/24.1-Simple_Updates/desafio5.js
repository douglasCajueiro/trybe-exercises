db.movies.updateOne(
  { title: "Home Alone" },
  { $inc: { budget: 5 } },
);
