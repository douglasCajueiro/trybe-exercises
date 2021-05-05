db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"] }},
  { $addToSet: { category: "90's" } },
);
