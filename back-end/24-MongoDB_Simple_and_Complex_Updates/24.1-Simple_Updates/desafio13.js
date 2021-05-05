db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $max: { imdbRating: 17 } },
);
