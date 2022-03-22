const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [{
    id:'1',
    numero: "613",
    nome: "Cubchoo",
    tipo: "Ice",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/613.png",
    descricao: "When this Pokémon is in good health, its snot becomes thicker and stickier. It will smear its snot on anyone it doesn’t like.",
    altura: "0.5 m",
    peso: "8.5 kg",
    categoria: "Chill",
    habilidade: "Snow Cloak, Slush Rush"
}, {
    id:'2',
    numero: "614",
    nome: "Beartic",
    tipo: "Ice",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/614.png",
    descricao: "It swims through frigid seas, searching for prey. From its frozen breath, it forms icy fangs that are harder than steel.",
    altura: "2.6 m",
    peso: "260.0 kg",
    categoria: "Freezing",
    habilidade: "Snow Cloak, Slush Rush"
}, {
    id:'3',
    numero: "024",
    nome: "Arbok",
    tipo: "Poison",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    descricao: "It swims through frigid seas, searching for prey. From its frozen breath, it forms icy fangs that are harder than steel.",
    altura: "3.5 m",
    peso: "65 kg",
    categoria: "Cobra",
    habilidade: "Shed Skin, Intimidate"
}];

app.get("/", (req, res) => {
    res.render("../views/index.ejs", { pokedex:pokedex });
});

app.get("/home", (req, res) => {
    res.render("../views/index.ejs");
});

app.get("/detalhes", (req, res) => {
    res.render("../views/index.ejs");
});

app.post("/create", (req, res) => {
    const pokemon = req.body;
    pokemon.id = pokedex.length + 1;
    pokedex.push(pokemon);
    console.log(pokemon);
    res.redirect("/");
});

app.get("/update/:numero", (req, res) => {
    const numero = Number(req.params.numero);
    const pokemon = pokedex.find(pokemon => pokemon.numero === numero);
    res.render("/cadastro", { pokemon, pokedex });
});

app.get("/cadastro", (req, res) => {
    res.render("../views/index.ejs");
});



app.listen(port, () => console.log(`O Servidor Pokedex está rodando na http://localhost:${port}.`));