const palabrasSinOrden = [
    'patisserie',   'unspide',        'overclaim',
    'theoretician', 'electorally',    'corivalled',
    'flamier',      'overteach',      'announcers',
    'loggat',       'waragi',         'tibia',
    'maggies',      'blashes',        'sealers',
    'repurchases',  'soberises',      'corrivalship',
    'chicha',       'undrawing',      'insatiable',
    'gauzier',      'pentamerous',    'tetchinesses',
    'eery',         'scincoids',      'heedless',
    'microspecies', 'calottes',       'syes',
    'phytologies',  'adjunction',     'myelopathic',
    'trackings',    'crap',           'barilla',
    'deciduate',    'graduating',     'readvertizement',
    'forbears',     'modestly',       'legendarily',
    'folk',         'mamba',          'noroviruses',
    'escheator',    'vitriolisation', 'abstracter',
    'antliate',     'torqued'
];

function obtenerCancion(array, name) {
    const result = array.find((value, index) => {
        if (value === name) return [value, index]
    }) ?? -1

    return result 
}

console.log('using find', obtenerCancion(palabrasSinOrden, 'mambasa'))

// Pseudo-Código para la Búsqueda Lineal
// la función acepta un arreglo y un valor
// utiliza un ciclo para recorrer el arreglo elemento por elemento
// si encuentras el valor que buscas, devuelve el índice
// si terminas el ciclo sin encontrar el valor, devuelve -1

function busquedaLineal(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

console.log('busqueda lineal', busquedaLineal(palabrasSinOrden, 'mambasa'))

// La complejidad de la búsqueda lineal es O(n). Depende cuantos elementos hay en la lista.
