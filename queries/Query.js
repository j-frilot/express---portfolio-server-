const commonQueries = require("./commonQueries");

const experienceQueries = {
    ...commonQueries,
    ...require("./experienceQueries")
};

module.exports = {
    experienceQueries
};
