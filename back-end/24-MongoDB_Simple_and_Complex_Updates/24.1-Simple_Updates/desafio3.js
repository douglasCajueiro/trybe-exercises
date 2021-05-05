db.movies.updateOne(
  { title: "Home Alone" },
  { $set: { budget: 15 } },
);
