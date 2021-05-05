db.movies.updateOne(
  { title: "Home Alone",
    "cast.actor": "Daniel Stern"
  },
  { $push: {
    "cast.$.character": "Marv" 
    }
  },
);
