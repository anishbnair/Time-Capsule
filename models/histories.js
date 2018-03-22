// Model for history

module.exports = function (sequelize, DataTypes) {
    var histories = sequelize.define("histories", {

        year: {
            type: DataTypes.INTEGER,
        },
        best_picture: {
            type: DataTypes.STRING,
        },
        song: {
            type: DataTypes.STRING,
        },
        us_pres: {
            type: DataTypes.STRING,
        },
        census: {
            type: DataTypes.STRING,
        },
        super_bowl: {
            type: DataTypes.STRING,
        },
        world_series: {
            type: DataTypes.STRING,
        },

    });
    return histories;
};


