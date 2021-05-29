conn = require("../db/dbconfig");
const conn = require("../db/dbconfig");
const experienceQueries = require("./experienceQueries");

const commonQueries = {
    findAll: (res, table) => {
        conn.execute(`SELECT * FROM ${table}`, (error, results) => {
            if (error) {
                console.log("There was a query error with 'findAll':", error);
                conn.destroy();
            } else {
                if (results.length == 1) {
                    res.json(...results);
                    res.render(...results);
                    console.log("'findAll' Query was successfull");
                    connection.destroy();
                } else {
                    res.json(results);
                    console.log("'findAll' Query was successfull");
                    connection.destroy();
                }
            }
        });
    }
};

module.exports = commonQueries;
