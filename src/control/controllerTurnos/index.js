const getbyid = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    if (!isNaN(id)) {
      res.status(200).send("sirve para traer por ID getbyid");
      console.log("sirve para traer por ID getbyid");
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(404).send({ mensaje: err });
  }
};

const getbyName = async (req, res, next) => {
  const { name } = req.query;
  // console.log(name);
  if (name && isNaN(name)) {
    try {
      res.status(200).send("traer por nombre.... getbyName");

      console.log(" traer por nombre.... getbyName");
    } catch (err) {
      console.log(err);
      res.status(404).send({ mensaje: err });
    }
  } else {
    next();
  }
};

const getInfo = async (req, res) => {
  try {
    res.status(200).send("sirve para traer toda la info getinfo");

    console.log(" sirve para traer toda la info getinfo");
  } catch (err) {
    res.status(404).send({ msj: err });
  }
};

const postRoute = async (req, res) => {
  const {} = req.body;
  //   console.log(req.body)
  try {
    //   if (
    //   ) {
    //   } else {
    //     res.status(404).send({ msj: "No Creado, Faltan datos " });
    //   }
  } catch (err) {
    console.log(err);
    res.status(404).send({ msj: err });
  }
};

module.exports = {
  getInfo,
  getbyName,
  postRoute,
  getbyid,
  postRoute,
};
