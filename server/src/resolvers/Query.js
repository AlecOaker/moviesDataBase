const { getPopular } = require("../modules/movies");

async function movies(parent, args) {
    const data = await getPopular();

    return data;
}

module.exports = {
    movies,
};
