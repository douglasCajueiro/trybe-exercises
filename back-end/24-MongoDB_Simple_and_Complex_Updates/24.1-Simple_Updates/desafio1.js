db.movies.updateOne(
  { title: "Batman" },
  { $set: { imdbRating: 7.7 } },
);
