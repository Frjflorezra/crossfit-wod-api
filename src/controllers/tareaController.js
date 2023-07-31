const Tarea = require("../database/models/Tarea");

const getAllTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).send({status: "SUCCESS", data: tareas})
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }

};
const getOneTarea = async(req, res) => {
  const { _id } = req.params
  try {
    const tarea = await Tarea.findById(_id)
    if(!tarea){
      return res.status(404).send({status: "FAILED", data: { error:"Tarea not founded"}})
    }
    res.status(200).send({status: "SUCCESS", data: tarea})
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const createNewTarea = async(req, res) => {
  const { body } = req
  try {
    const tarea = new Tarea({
      title: body.title,
      description: body.description,
      state: body.state,
    });
    console.log(tarea)
    await tarea.save()
    res.status(201).send({ status: "SUCCESS", data: tarea });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneTarea = async (req, res) => {
  const { _id } = req.params
  const { body } = req
  try {
    const tarea = await Tarea.findByIdAndUpdate(
      _id,
      {
        title: body.title,
        description: body.description,
        state: body.state
      },
    )
    const updateTarea = await Tarea.findById(_id) 
    if (!tarea) {
      return res.status(404).send({ status: "FAILED", data: { error: "Tarea no encontrada" } });
    }
    res.status(200).send({ status: "SUCCESS", data: updateTarea });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneTarea = async (req, res) => {
  const { _id } = req.params
  try {
    const tarea = await Tarea.findByIdAndDelete(_id)
    if (!tarea) {
      return res.status(404).send({ status: "FAILED", data: { error: "Tarea no encontrada" } });
    }
    res.status(200).send({ status: "SUCCESS"});
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllTareas,
  getOneTarea,
  updateOneTarea,
  deleteOneTarea,
  createNewTarea,
};
