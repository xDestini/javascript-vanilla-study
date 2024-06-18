// Ejemplo

const writer = {
    name: "Leira",
    isAuthor: true,
    articles: [
        "La Guía Definitiva de Console API",
        "CSS-en-JS: Styled Components en React"
    ]
}

// insertar
writer.twitter = "MechEngSanchez";

// acceder
const nombre = writer.name; // nombre = "Leira"
console.log(nombre)
console.log(writer.hasOwnProperty("name")) // true

// buscar
let hasTwitter;
for (const [key, value] of Object.entries(writer)) {
    if (key === "twitter" && value !== null) hasTwitter = value;
}

// remover
delete writer["isAuthor"];

console.log(writer)
