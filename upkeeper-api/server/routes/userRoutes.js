const router = require("express").Router();

module.exports = db => {
  // all routes will go here
  // router.get("/:id", (req, res) => {
  //   const queryStatement = `
  //   SELECT * FROM users WHERE id = $1;`;
  //   const queryParams = [req.params.id];
  //   db.query(queryStatement, queryParams).then(data => {
  //     Promise.resolve(res.json(data.rows));
  //   });
  // });

  // this route is to get an individual owner and all his propertis
  router.get("/:id", (req, res) => {
    const queryStatement = `
    SELECT * FROM users 
    JOIN properties ON user_id = users.id
    WHERE user_id = $1;`;
    const queryParams = [req.params.id];
    db.query(queryStatement, queryParams).then(data => {
      Promise.resolve(res.json(data.rows));
    });
  });

  //this route is to grab all the reviews for cleaners
  router.get("/:id/reviews", (req, res) => {
    const queryStatement = `
    SELECT * FROM users
    RIGHT JOIN cleaners ON user_id = users.id
    RIGHT JOIN ratings ON cleaner_id = cleaners.id
    JOIN reservations ON reservations.cleaner_id = cleaners.id
    WHERE users.id = $1;
    `;
    const queryParams = [req.params.id];
    db.query(queryStatement, queryParams).then(data => {
      Promise.resolve(res.json(data.rows));
    });
  });

  //this route is to get all cleaners by location and the date where they don't have a booking
  router.get("/", (req, res) => {
    const queryStatement = `
    SELECT cleaners.id AS cleanerID, first_name AS firstName, last_name AS lastName, city_province, picture_url AS imgURL, cleaners.payrate AS payRate, AVG(rating) AS avgRating ,COUNT(rating) AS numRatings FROM users
    JOIN cleaners ON user_id = users.id
    JOIN locations ON location_id = locations.id
    JOIN reservations ON reservations.cleaner_id = cleaners.id
    LEFT JOIN ratings ON ratings.cleaner_id = cleaners.id
    WHERE booking_date != $1
    GROUP BY users.id, payrate, city_province, cleaners.id
    HAVING city_province LIKE $2;
    `;
    const queryParams = [`${req.query.date}`, `%${req.query.city}%`];
    db.query(queryStatement, queryParams).then(data => {
      Promise.resolve(res.json(data.rows)).catch(() => res.json([]));
    });
  });

  return router;
};
