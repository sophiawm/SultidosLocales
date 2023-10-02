import { Sequelize } from 'sequelize';

const db =  new Sequelize ('surtidoslocales_app', 'root', 'wonG1996.03', 
{
    host:'localhost',
    dialect: 'mysql',
    port: 3306,
    define:{timestamps: false}
});

export default db;