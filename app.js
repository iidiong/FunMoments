const express = require('express');
const axios = require('axios').default;
const bodyParser = require('body-parser')
const multer = require('multer');
const upload = multer();

const baseURL = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?"
// const baseURL1 = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?"
const baseURL2 = "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const baseURL3 = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s="
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

const app = express();
app.set("view engine", "ejs");

//setting view engine to ejs
app.set("view engine", "ejs");

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

//route for index page
app.get("/", async (req, res) => {
    let respondData = await axios.get(baseURL + "c=Ordinary_Drink");
    let results = respondData.data.drinks;
    // console.log(respondData.data.drinks);

    var subheading = "I though we should involve some magic";
    let drinkcategory = "Ordinary Drinks Recipes";
    res.render("index", {
        results: results,
        subheading: subheading,
        drinkcategory: drinkcategory
    });

});
app.get("/cocktail", async (req, res) => {
    let respondData = await axios.get(baseURL + "c=Cocktail");
    let results = respondData.data.drinks;
    // console.log(respondData.data.drinks);

    var subheading = "I though we should involve some magic";
    let drinkcategory = "Corktails Recipes";

    res.render("index", {
        results: results,
        subheading: subheading,
        drinkcategory: drinkcategory
    });

});

//route for magic page
app.get("/favorite", function (req, res) {
    res.render("favorites");
});
app.get("/login", function (req, res) {
    res.render("login");
});
app.get("/register", function (req, res) {
    res.render("register");
});
app.get("/details/:id", async (req, res) => {
    // console.log(req.params.id)
    let respondData = await axios.get(`${baseURL2}${req.params.id}`);
    let results = respondData.data.drinks;
    console.log(respondData.data.drinks[0]);
    res.render("details", {
        results: results
    });
});
app.post("/search", async (req, res) => {
    let respondData;

    console.log(isNaN(req.body.q))
    console.log(await req.body.q)
    try {
        if (isNaN(req.body.q)) {
            respondData = await axios.get(baseURL3 + req.body.q);
        } else {
            respondData = await axios.get(baseURL2 + req.body.q);
        }
        let results = respondData.data.drinks;
        console.log(respondData.data.drinks[0]);
        res.render("details", {
            results: results
        });
    } catch (error) {
        res.render("404");
    }

});

module.exports = app;
