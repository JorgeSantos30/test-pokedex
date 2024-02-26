import { Coach } from "../models/Coach.js";

/**
 * Agregar nuevo entrenador
 */

async function addCoach(req, res) {
  try {
    const { name, lastName, numberPhone, medails } = req.body;

    const coach = Coach({
      name,
      lastName,
      numberPhone,
      medails,
    });

    const coachStored = await coach.save();

    console.log(coachStored);

    res.status(201).send({ coachStored });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

/**
 * Obtener todos los entrenadores
 */
async function getCoaches(req, res) {
  try {
    const coaches = await Coach.find();
    res.status(200).send({ coaches });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error: error,
    });
  }
}

/**
 * Editar entrenador
 */

async function editCoach(req, res) {
  try {
    const coachId = req.params.id;
    const { name, lastName, numberPhone, medals } = req.body;

    const updatedCoach = await Coach.findByIdAndUpdate(
      coachId,
      { name, lastName, numberPhone, medals },
      { new: true }
    );

    if (!updatedCoach) {
      return res.status(404).json({ message: "Entrenador no encontrado" });
    }

    res.status(201).json({ coach: updatedCoach });
  } catch (error) {
    console.error("Error al actualizar el entrenador:", error);
    res.status(500).json({ message: "Error al actualizar el entrenador" });
  }
}

/**
 * Eliminar entrenador
 */
async function deleteCoach(req, res) {
  try {
    const coachId = req.params.id;
    const deletedCoach = await Coach.findByIdAndDelete(coachId);

    if (!deletedCoach) {
      return res.status(404).json({ message: "Entrenador no encontrado" });
    }

    res
      .status(202)
      .json({
        coach: deletedCoach,
        message: "Entrenador eliminado correctamente",
      });
  } catch (error) {
    console.error("Error al eliminar el entrenador:", error);
    res.status(500).json({ message: "Error al eliminar el entrenador" });
  }
}

export { addCoach, getCoaches, editCoach, deleteCoach };
