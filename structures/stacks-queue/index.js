// Para crear una clase se utiliza la palabra reservada "class" esta crea una constante por lo que la clase no podrá ser definida nuevamente. 
// El método para crear nuevos objetos es el constructor .
class Article {
    // Crear los objetos de la clase "son los parametros que puede recibir al momento de crear la clase"
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.pageViews = 0
    }

    // También podemos añadirle funcionalidad a través de métodos. 
    // Se le llama método a una función que afecta instancias individuales de una clase. 
    addPageView() {
		this.pageViews++;
    }
}

// Basados en esta clase, podremos crear artículos que contengan título y autor. Para esto, se utiliza la palabra clave new.
let dataStructuresArticle = new Article("Intro to Data Structures", "Leira Sánchez");
console.log(dataStructuresArticle.title) // "Intro to Data Structures"

let sortingAlgorithmsArticle = new Article("Intro to Sorting Algorithms", "Leira Sánchez");
console.log(sortingAlgorithmsArticle.title) //"Intro to Sorting Algorithms"

// Los métodos de dataStructuresArticles no afectarán a sortingAlgorithmsArticle.
dataStructuresArticle.addPageView();
console.log(dataStructuresArticle.pageViews); // 1
console.log(sortingAlgorithmsArticle.pageViews); // 0