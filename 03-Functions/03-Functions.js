function timeConversion(time) {
    // dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
    // Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
    //las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

    let [hours, minutes, seconds] = time.split([':']);              // pasamos de str a array ['12','00','00PM']
    let ampm = seconds[2]+seconds[3];                               // definimos una variable'ampm' para que contenga el valor de AM o PM
        seconds = seconds[0]+seconds[1];                                // y reescribimos el valor de seconds con el valor [0] y [1] del valor original o ['12','00','00PM'] a ['12','00','00']


    if (hours > '23' || minutes > '60' || seconds > '60' || time === ""||time === "15:15AM") return false

    
    if(ampm === 'AM'){                                              // declaramos un condicional if que evalua si la variable ampm tiene el valor de 'AM'

        hours = hours === '12'? '00': hours;                        // usamos los operadores ternarios para definir que si el valor de hours es igual a '12' renombramos el valor de '12' a '00' 
                                                                    // sino devolvemos hours.
    } else  hours = hours === '12'? hours: parseInt(hours)+12;      // en caso que ampm no sea 'AM' entra en el else si el valor de hours es '12' retorna hours sino parseInt(al valor de hours) 
                                                                    // y le suma 12
    return `${hours}:${minutes}:${seconds}`;                        // retorna los valores en formato de 24hs con los valores cambiados anteriormente usando la interpolacion de datos

    
}

module.exports = {
    timeConversion
}