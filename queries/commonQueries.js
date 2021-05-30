const pool = require("../db/dbconfig");
const experienceQueries = require("./experienceQueries");

const commonQueries = {
    findAll: (res, table) => {
        pool.execute(`SELECT * FROM ${table}`, (error, results) => {
            if (error) {
                console.log("There was a query error with 'findAll':", error);
            } else {
                if (results.length == 1) {
                    res.json(...results);
                    res.render(...results);
                    console.log("'findAll' Query was successfull");
                } else {
                    res.json(results);
                    console.log("'findAll' Query was successfull");
                }
            }
        });
    }
};

module.exports = commonQueries;
