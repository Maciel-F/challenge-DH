module.exports = (sequelize, dataTypes) => {

    const alias = 'Applicants'

    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false
        },
        first_name : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        last_name : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        dni : {
            type : dataTypes.STRING(8),
            allowNull : false
        },
        phone : {
            type : dataTypes.STRING(15),
            allowNull : false
        },
        sex : {
            type : dataTypes.STRING(20),
            allowNull : true
        },
        email : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        linkedin : {
            type : dataTypes.STRING(255),
            allowNull : false
        },
        birth_date : {
            type : dataTypes.DATE,
            allowNull : false
        },
        image : {
            type : dataTypes.STRING(35),
            allowNull : true
        },
        profession_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        }
};

    const config = {
        tableName : 'applicants',
        timestamps : false
};

    const Applicant = sequelize.define(alias, cols, config);

    Applicant.associate = function (models){
        Applicant.belongsTo(models.Professions, {
            as : 'professions',
            foreignKey : 'profession_id'
        })
    }

    return Applicant;
}