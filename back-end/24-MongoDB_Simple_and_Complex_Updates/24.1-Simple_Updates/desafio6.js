db.movies.updateOne(
  { title: "Batman" },
  { $mul: { imdbRating: 4 } },
);
