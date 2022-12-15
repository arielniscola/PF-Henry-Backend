const { Favorites } = require('../db');

//Trae los fav de la db
const getAllFavorites = async () => {
    const data = await Favorites.findAll();
    if(!data) throw "No data"
    return data
} 

//Crea un fav
const createFavorite = async (data) => {
    const newFavorite = await Favorites.create(data);
    if(!newFavorite) throw "Favorite not created"
    console.log(newFavorite);
    return newFavorite
}

//trae fav por id
const getFavoriteID = async (id) => {
    if(!id) throw "Id not found"
    const data = await Favorites.findByPk(id);
    if(!data) throw "Favorite not found"
    return data
}

//Actualiza el fav
const updateFavorito = async (id, data) =>{
    try {
        const {favorites} = data; 

        const fav = await Favorites.findByPk(id);
        fav.favorites = favorites;
        await fav.save();
    } catch (error) {
        res.status(400).json(error)
    }
}

//Elimina la fav
const deleteFavorite = async(id) =>{
    await Favorites.destroy({
        where:{
            id,
        },
    });
    return Favorites;
} 

module.exports = {
    getAllFavorites,
    createFavorite,
    getFavoriteID,
    updateFavorito,
    deleteFavorite
}