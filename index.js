const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [{
    "Número": "613",
    "Nome": "Cubchoo",
    "Tipo":"Ice",
    "Imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/613.png",
    "Descrição": "When this Pokémon is in good health, its snot becomes thicker and stickier. It will smear its snot on anyone it doesn’t like.",
    "Altura": "0.5 m",
    "Peso": "8.5 kg",
    "Categoria": "Chill",
    "Habilidade": "Snow Cloak, Slush Rush"},{

    "Número": "614",
    "Nome": "Beartic",
    "Tipo":"Ice",
    "Imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/614.png",
    "Descrição": "It swims through frigid seas, searching for prey. From its frozen breath, it forms icy fangs that are harder than steel.",
    "Altura": "2.6 m",
    "Peso": "260.0 kg",
    "Categoria": "Freezing",
    "Habilidade": "Snow Cloak, Slush Rush"},{

    "Número": "024",
    "Nome": "Arbok",
    "Tipo":"Poison",
    "Imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    "Descrição": "It swims through frigid seas, searching for prey. From its frozen breath, it forms icy fangs that are harder than steel.",
    "Altura": "3.5 m",
    "Peso": "65 kg",
    "Categoria": "Cobra",
    "Habilidade": "Shed Skin, Intimidate"}];

app.get("/", (req, res) => {
    res.render("../views/index.ejs");
});

app.get("/home", (req, res) => {
    res.render("../views/index.ejs");
});

app.get("/detalhes", (req, res) => {
    res.render("../views/index.ejs");
});

app.get("/cadastro", (req, res) => {
    res.render("../views/index.ejs");
});



app.listen(port, () => console.log(`O Servidor Pokedex está rodando na http://localhost:${port}.`));