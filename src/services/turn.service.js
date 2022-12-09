const { Turno, Client, Court } = require("../db");

const createTurn = async(idClient, idCourt, data) => {
    if(!idClient || !idCourt) throw "Data required missing";
    const { date, time_start } = data;
    if(!date || !time_start) throw "Date and time incorrect"

    const newTurn = await Turno.create(data);

    if(!newTurn) throw "No create turn"

    const client = await Client.findOne({
        where: { id: idClient },
      })
    if(!client) throw "client not found"
    newTurn.adClients(client);

    const court = await Court.findOne({
        where: {id: idCourt}
    })
    if(!court) throw "court not found"
    newTurn.addCourts(court); 
}

const deleteTurn = async(idTurn) => {
    const result = await Turno.destroy({
        where:{
            id: idTurn
        }
    });
    if(!result) throw "Turno no deleted"
    return result;
}

const getTurnsComplejo = async(idComplejo) =>{
    
}

const getTurnID = async(id) => {
    const turn = await Turno.findByPk(id);
    if(!turn) throw "Not found"

    return turn
}

module.exports = {
    createTurn,
    deleteTurn,
    getTurnsComplejo,
    getTurnID
}