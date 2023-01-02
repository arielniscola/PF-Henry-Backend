const favoriteService = require('../services/favorites.service');

//Trae los favoritos
const getAllFavorites = async (req, res) => {
    try {
        const data = await favoriteService.getAllFavorites();

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

//Crea favoritos
const createFavorite = async (req, res) => {
    try {
        const data = await favoriteService.createFavorite(req.body);
        res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(400).json({message : error.message});
    }
}

//Trae favorito por id
const getFavoriteID = async (req, res) => {
    try {
        const data = await favoriteService.getFavoriteID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error)
    }
}

//Elimina el favorito
const deleteFavorite = async (req, res) => {
    try {
        const {id} = req.params;
        await favoriteService.deleteFavorite(id);
        res.send('Favorite Deleted successfully');
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//Actualizar el favorito
const updateFavorito = async (req, res) => {
    try {
        const {id} = req.params;
        await favoriteService.updateFavorito(id, req.body);
        res.send('Favorito updated successfully');
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllFavorites,
    createFavorite,
    getFavoriteID,
    deleteFavorite,
    updateFavorito
}
