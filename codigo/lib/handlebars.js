const { format, register } = require('timeago.js');   //requerimos timeago, lo ejecutamos y se vuelve una instancia.
const moment = require("moment");
const helpers = {};                        //helpers ens un objeto que sera utilizado por la vista de handlebars.

register('es_ES', (number, index, total_sec) => [
    ['justo ahora', 'ahora mismo'],
    ['hace %s segundos', 'en %s segundos'],
    ['hace 1 minuto', 'en 1 minuto'],
    ['hace %s minutos', 'en %s minutos'],
    ['hace 1 hora', 'en 1 hora'],
    ['hace %s horas', 'en %s horas'],
    ['hace 1 dia', 'en 1 dia'],
    ['hace %s dias', 'en %s dias'],
    ['hace 1 semana', 'en 1 semana'],
    ['hace %s semanas', 'en %s semanas'],
    ['1 mes', 'en 1 mes'],
    ['hace %s meses', 'en %s meses'],
    ['hace 1 año', 'en 1 año'],
    ['hace %s años', 'en %s años']
][index]);

helpers.timeago = (timestamp) => {     //timestamp es utilizado desde la vista. Estamos importando timeago
    console.log(format(timestamp, 'es_ES'));   
    return format(timestamp, 'es_ES');         //Demostrara cuanto tiempo a pasado desde la publicacion.
};

helpers.dateFormat = (date, arguments) => {
    const formatToUse = (arguments && arguments.hash && arguments.hash.format) || "YYYY-MM-DD"
    console.log(formatToUse);
    return moment(date).format(formatToUse);
};

helpers.ifSmaller = (arg1, arg2, options) => {
    return (arg1 < arg2) ? options.fn(this) : options.inverse(this);
};

helpers.isSelected = (option, value) => {
    if (option === value) {
        console.log("option: " + option + " = value: " + value);
        return ' selected';
    } else {
        console.log("option: " + option + " = value: " + value);
        return ''
    }
};

module.exports = helpers;
