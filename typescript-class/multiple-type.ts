interface IObject {
    data: {
        [key: string]: string
    }[],

}

const object1: IObject = [
    {
        data: [
            {
                name: 'name',
                lastname: 'lastname'
            },
            {
                nombre: 'nombre',
                apellido: 'apellido'
            }      
        ],
    },
    {
        content: [
            {
              id: 1,
              slug: 1,
              title: 1,
              images: {
                poster_portrait_academy: 1,
                poster_landscape_widescreen: 1
              },
              serie: true,
              new: false
            },
        ],
    },
    {
        current: 1,
        last: 10,
        total: 10,
        anotherTypeOfContent: [
            {
              id: 1,
              name: 1,
              game: true,
              another: false
            },
        ],
    },
]
  
interface Adapter  {
    data: {
        [key: string]: string
    }
}
  
const adapter = (object: IObject): Adapter => {
    return {
        data: {

        }
    }
}

console.log(adapter(object1))