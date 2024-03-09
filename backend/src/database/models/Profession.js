module.exports = (sequelize, dataTypes) => {
    const alias = 'Professions'

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false
        },
        profession_name : {
            type : dataTypes.STRING(25),
            allowNull : false
        }
    }

    const config = {
        tableName : 'professions',
        timestamps : false
    }

    const Profession = sequelize.define(alias, cols, config);

    Profession.associate = function (models){
        Profession.hasMany(models.Applicants, {
            as : 'applicants',
            foreignKey : 'profession_id'
        })
    }

    return Profession;
}