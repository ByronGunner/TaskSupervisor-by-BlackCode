const { format } = require('timeago.js');   //requerimos timeago, lo ejecutamos y se vuelve una instancia.
const helpers = {};                        //herlpers ens un objeto que sera utilizado por la vista de handlebars.

helpers.timeago = (timestamp) => {     //timestamp es utilizado desde la vista.
    console.log(format(timestamp));    //Estamos importando timeago
    return format(timestamp);         //Demostrara cuanto tiempo a pasado desde la publicacion.
};

helpers.ifSmaller = (arg1, arg2, options) => {
    return (arg1 < arg2) ? options.fn(this) : options.inverse(this);
};

module.exports = helpers;
