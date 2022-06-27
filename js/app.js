const mostrarReloj = ()=>{
    console.log('funcion mostrarReloj');
    
    let fecha = new Date();
    let hora = FormatoHora(fecha.getHours());
    let minuto = FormatoHora( fecha.getMinutes());
    let segundo = FormatoHora(fecha.getSeconds());
    let horaCompleta = `${hora}: ${minuto}: ${segundo}`;
    document.getElementById('hora').innerHTML = horaCompleta;

    // classlist = para recuperar todas las clases que se estan uilizando en css a este elemento html
    // toggle= funciona como un interruptor. apaga y prende cada vez que se aplica el set interval que manda a llamar a mostrarReloj()
    // t se aplica a la clase animar de css
    document.getElementById('contenedor').classList.toggle('animar');
}
// para que le agregue un cero (0) cuando sea menor a diez
const FormatoHora=(hora)=>{
    if(hora<10)
    hora = '0' +hora;
    return hora;
}
setInterval(mostrarReloj,1000);

const mostrarFecha= ()=>{
    console.log('funcion mostrarFecha')
    let fecha = new Date();
// para mostrar los meses y dias creo un array con los strings y dentro del mismo aplico los metodos del objeto Date (.getDay, getMonth)
    const weekday = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
    let diaString = weekday[fecha.getDay()];
    let diaNumber = FormatoHora(fecha.getDate());// para que el dia en numero tambien empiece con doble digito
    const MonthsString =['Jan','Feb','Mar','April','May','June','July','Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      
    let mesLetra = MonthsString[fecha.getMonth()];

    let fechaCompleta = `${diaString}, ${diaNumber} ${mesLetra}`;
    document.getElementById('fecha').innerHTML = fechaCompleta;
}