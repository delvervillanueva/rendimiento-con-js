//========================================Rendimiento de JS indices======================================
//vamos a listar un Array con 2500 elementos y solo mostraremos un resultado, observemos tiempo en que se tarda.
//Luego cambiemos el valor de elements a 500000 y observemos que llega a detenerse y nunca termina o te regresa un error
//por la cantidad que elementos que está iterando con el find()

let product = [];
let users = [];

const elements = 2500;

for (let i = 0; i < elements; i++) {
    users.push({ id: i, nombre: `nombre-id${i}` });

}

for (let i = 0; i < elements; i++) {
    product.push({
        id: i,
        nombre: `nombre${i}`,
        user_id: Math.floor(Math.random() * elements)

    });

}

console.time(1);
const llamar = product.map(x => ({
    ...x,
    user: users.find(y => y.id === x.user_id)

}));

console.timeEnd(1);
console.log('nombre', llamar[0]);





/*  ======================================================================================================== */
/*  ======================================================================================================== */
//El proble de redimiento se solucionó
//Indexamos los arreglos, así para cuando queramos ir a buscar un elemento está operación sea lineal y no tenga
//que dispararse y sea tan demorona la operación. 
//Acá se realizo el redimiento con la función que construimos "keyBy" 
//Metodo usando """"   reduce()  """"""


let product = [];
let users = [];

const keyBy = (arr, key) => arr.reduce((acc, el) => {
    acc[el[key]] = el
    return acc;
}, {});

const elements = 500000;


for (let i = 0; i < elements; i++) {
    users.push({ id: i, nombre: `nombre-id${i}` });
}

for (let i = 0; i < elements; i++) {
    product.push({
        id: i,
        nombre: `nombre${i}`,
        user_id: Math.floor(Math.random() * elements)
    });
}

const keydUsers = keyBy(users, 'id');

console.time(1);
const llamar = product.map(x => ({
    ...x,
    user: keydUsers[x.user_id]

}));

console.timeEnd(1);
console.log('nombre', llamar[0]);