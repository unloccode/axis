module.exports = (sequelize, Datatypes) => {
    const Uploads = sequelize.define('uploads', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING
        }
    });
    return Uploads;
};