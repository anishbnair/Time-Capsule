// Model for decades

module.exports = function (sequelize, DataTypes) {
    var Decades = sequelize.define("Decades", {

        decade: {
            type: DataTypes.INTEGER,
        },
        topic: {
            type: DataTypes.STRING,
        },
        title_tag: {
            type: DataTypes.STRING,
        },
        user_text: {
            type: DataTypes.TEXT,
        },
        user_picture: {
            type: DataTypes.STRING,
        }
    });

    Decades.associate = function (models) {
        // We're saying that a post should belong to a user
        // A post can't be created without an user due to the foreign key constraint
        Decades.belongsTo(models.User, {
            foreignKey: {
                // allowNull: false
            }
        });
    };

    return Decades;
};
