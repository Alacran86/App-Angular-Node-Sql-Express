const bd = require('../utils/bd');
const bdService = require('../utils/dbService');

const getALL = () => bd('producto AS P').join('categorias AS CAT', 'CAT.id', 'P.id_categoria').where({"P.habilitado" : true}).select('P.id','P.nombre', 'CAT.nombre AS nombreCategoria', 'P.precio', 'P.stock', 'P.imagen');
   
const create = (obj) => bdService.create("producto", obj);
   

const single = (id) => bd('producto').where({"habilitado" : 1, id}).select('*');
   

const modify = (id, obj) => bdService.modify("producto", id, obj);

const del = (id, habilitado = 0) => {
    index = productos.findIndex((producto) => producto.id == id);
    console.log(index, habilitado);
    productos[index]["habilitado"] = habilitado;
    console.log(productos);
};

module.exports = {getALL, create, single, modify, del};