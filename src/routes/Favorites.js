const { Router } = require("express");
const {    
    getAllFavorites,
    createFavorite,
    getFavoriteID,
    deleteFavorite,
    updateFavorito
    } = require("../controllers/favorite.controller");


const favoriteRoutes = Router();


favoriteRoutes.get("/all", getAllFavorites);
favoriteRoutes.post("/create", createFavorite);
favoriteRoutes.put("/update/:id", updateFavorito);
favoriteRoutes.delete("/delete/:id", deleteFavorite);
favoriteRoutes.get("/:id", getFavoriteID);


module.exports = favoriteRoutes;