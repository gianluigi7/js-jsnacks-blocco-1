
const parolaUno = prompt('inserire parola');
const parolaDue = prompt('inserire parola');

if (parolaUno.length > parolaDue.length) {
    console.log(parolaDue)
    console.log(parolaUno)
} 
else if (parolaUno.length < parolaDue.length) {
    console.log(parolaUno)
    console.log(parolaDue)
}
else {
    console.log('le parole hanno la stess lunghezza')
    console.log(parolaUno)
    console.log(parolaDue)
}