import {connect} from "./connection.js";

export default class Database {
    entity = null;
    fields = null
    values = null

    constructor(entity){
        this.entity = entity;
    }

    async select(){
        const database = await connect();
        const response = await database.query(`SELECT * FROM ${this.entity} ORDER BY id DESC`);
        const data = response.rows;

        database.release();
        return data;
    }
}