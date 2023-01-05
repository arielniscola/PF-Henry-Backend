const { Turno, Client, Court } = require("../db");

const getAllTurns = async () => {
    const data = await Turno.findAll({
        include: {model: [Client, Court]}
    });
    if(!data) throw "No data"
    return data
} 

const createTurn = async(data) => {
    // console.log(data);
    // if(!idClient || !idCourt) throw "Data required missing";
    const { date, time_start, idUser, idCourt} = data;
    if(!date || !time_start) throw "Date and time incorrect"

    const newTurn = await Turno.create(data);

    if(!newTurn) throw "No create turn"

    // const client = await Client.findAll({
    //     where: { id: idClient }
    // })
    // console.log(client);
    // if(!client) throw "client not found"
    // await newTurn.addClient(client);

    // const court = await Court.findOne({
    //     where: {id: idCourt},
    // })
    // console.log(court);
    // if(!court) throw "court not found"
    // newTurn.addCourts(court); 
    // console.log(court);
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
    const courts = await Court.findAll({
        where: {
            idComplejo: id
        }
    });
    const result = await Turno.findAll({
        where: {
            idCourt: courts
        }
    })

    return result
}

const getTurnID = async(id) => {
    const turn = await Turno.findByPk(id, {
        include: {model: [Client, Court]}
    });
    if(!turn) throw "Not found"
    return turn
}

const updateTurn = async (id, data) =>{
    try {
        const {date, time_start, state} = data; 
        const turn = await Turno.findByPk(id);
        turn.date = date;
        turn.time_start = time_start;
        turn.state = state;
        await turn.save();
    } catch (error) {
        res.status(400).json(error)
    }
}
 const getTurnsCourtDate = async(date, idCourt) => {
    const turns = Turno.findAll({
        where:{
            idCourt: idCourt,
            date: date,
            state: "reserved"
        },
        include: [{model: Client}]
    })
 }

module.exports = {
    getAllTurns,
    createTurn,
    deleteTurn,
    getTurnsComplejo,
    getTurnID,
    updateTurn,
    getTurnsCourtDate
}