conn = require("../db/dbconfig");
const experienceQueries = require("./experienceQueries");

const commonQueries = {
    findAll: (res, table) => {
        conn.execute(`SELECT * FROM ${table}`, (error, results) => {
            if (!error) {
                if (results.length == 1) {
                    res.json(...results);
                    res.render(...results);
                } else {
                    res.json(results);
                }
            } else {
                console.log("Query Error", error);
            }
        });
    }
};

module.exports = commonQueries;
