db.movies.updateOne(
  { title: "Home Alone" },
  { $min: { budget: 5 } },
);
