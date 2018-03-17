// Model for history

module.exports = function (sequelize, DataTypes) {
    var History = sequelize.define("History", {

        year: {
            type: DataTypes.INTEGER,
        },
        best_picture: {
            type: DataTypes.STRING,
        },
        song: {
            type: DataTypes.STRING,
        },
        president: {
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
        }
    });
    return History;
};
