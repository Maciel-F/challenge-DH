const db = require('../database/models');
const path = require('path')

let applicantController = {

    list: async (req, res) => {
   let applicant = await db.Applicants.findAll({include: [{association: "professions"}]})
     let response = {
        meta : {
            status : 200,
            total : applicant.length,
    },
        data : applicant
     }
     res.json(response)
},
    

    id : async (req,res) => {
        let idApplicant = await db.Applicants.findByPk(req.params.id)
    let response = {
        meta : {
        status : 200 },

        data: idApplicant
    }
    res.json(response)

    
   }

}


module.exports = applicantController