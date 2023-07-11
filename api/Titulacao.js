import Database from '../db/Database.js';

export default class Titulacao{
    id = null
    descricao = null

    constructor(data) {
        Object.assign(this, data)
    }
    
    static async findAll(){
        const database = new Database('titulacao')
        const data = await database.select()
        const result = []

        if(data){
            data.forEach((row, index) => {
                result[index] = new this(row)
            })
        }

        return result
    }
}