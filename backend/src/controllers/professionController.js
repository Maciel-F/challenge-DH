const patch = require('path');
const db = require('../database/models');

const professionController = {
    list : async (req,res) => {
        let profession = await db.Professions.findAll()
          let response = {
            meta : {
                status : 200,
                total : profession.length,
            },
          data : profession
          }
        res.json(response)
    },

    id : async (req,res) => {
        let idProfession = await db.Professions.findByPk(req.params.id)
        let response = {
            meta: {
                status : 200
            },
           data : idProfession
        }
        res.json(response)
    }
}

module.exports = professionController