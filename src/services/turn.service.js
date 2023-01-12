const { Turno, Client, Court, Complejo } = require("../db");

const getAllTurns = async () => {
  const data = await Turno.findAll({
    include: [{ model: Client, require: true }],
  });
  if (!data) throw "No data";
  return data;
};

const createTurn = async (data) => {
  console.log(data);
  // if(!idClient || !idCourt) throw "Data required missing";
  const { date, time_start, clientId, courtId } = data;
  if (!date || !time_start) throw "Date and time incorrect";

  const newTurn = await Turno.create(data);

  if (!newTurn) throw "No create turn";

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
  return newTurn;
};

const deleteTurn = async (idTurn) => {
  const result = await Turno.destroy({
    where: {
      id: idTurn,
    },
  });
  if (!result) throw "Turno no deleted";
  return result;
};

const getTurnsComplejo = async (idComplejo) => {
  const courts = await Court.findAll({
    where: {
      idComplejo: idComplejo,
    },
  });
  const result = await Turno.findAll({
    where: {
      idCourt: courts,
    },
  });

  return result;
};

const getTurnID = async (id) => {
  const turn = await Turno.findByPk(id, {
    include: { model: Court },
  });
  if (!turn) throw "Not found";
  return turn;
};

const updateTurn = async (id, data) => {
  try {
    const { date, time_start, state } = data;
    const turn = await Turno.findByPk(id);
    turn.date = date;
    turn.time_start = time_start;
    turn.state = state;
    await turn.save();
  } catch (error) {
    res.status(400).json(error);
  }
};
const getTurnsCourtDate = async (date, courtId) => {
  const formatdate = date.replace("/", "-");
  const turns = await Turno.findAll({
    where: {
      courtId: courtId,
      date: formatdate,
      state: "reserved",
    },
    include: [{ model: Client }],
  });

  return turns;
};
const getTurnsUser = async (idUser) => {
  const turns = await Turno.findAll({
    where: {
      clientId: idUser,
    },
    include: [{ model: Court, include: [{ model: Complejo }] }],
  });

  return turns;
};

module.exports = {
  getAllTurns,
  createTurn,
  deleteTurn,
  getTurnsComplejo,
  getTurnID,
  updateTurn,
  getTurnsCourtDate,
  getTurnsUser,
};
