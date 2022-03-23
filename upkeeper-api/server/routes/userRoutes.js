const { query } = require("express");

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
  // router.get("/:id", (req, res) => {
  //   const queryStatement = `
  //   SELECT * FROM users
  //   JOIN properties ON user_id = users.id
  //   WHERE users.id = $1;
  //   `;
  //   const queryParams = [req.params.id];
  //   db.query(queryStatement).then(data => {
  //     Promise.resolve(res.json(data.rows));
  //   });
  // });
  router.get("/", (req, res) => {
    const queryStatement = `
    SELECT first_name AS firstName, last_name AS lastName, city_province, picture_url AS imgURL, cleaners.payrate AS payRate, AVG(rating) AS avgRating ,COUNT(rating) AS numRatings FROM users
    JOIN cleaners ON user_id = users.id
    JOIN locations ON location_id = locations.id
    JOIN reservations ON reservations.cleaner_id = cleaners.id
    LEFT JOIN ratings ON ratings.cleaner_id = cleaners.id
    WHERE booking_date != $1
    GROUP BY users.id, payrate, city_province
    HAVING city_province LIKE $2;;
    `;
    const queryParams = [`${req.query.date}`, `%${req.query.city}%`];
    db.query(queryStatement, queryParams).then(data => {
      Promise.resolve(res.json(data.rows)).catch(() => res.json([]));
    });
  });

  return router;
};

// SELECT * FROM cleaners
//     JOIN users ON user_id = users.id
//     JOIN locations ON location_id = locations.id
//     JOIN reservations ON cleaner_id = cleaners.id
//     JOIN ratings ON
//     WHERE city_province ='Alert Bay, British Columbia';
