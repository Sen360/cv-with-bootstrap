var now = new Date();
var annee   = now.getFullYear();
var mois    = ('0'+now.getMonth()+1).slice(-2);
var jour    = ('0'+now.getDate()   ).slice(-2);
var heure   = ('0'+now.getHours()  ).slice(-2);
var minute  = ('0'+now.getMinutes()).slice(-2);
var seconde = ('0'+now.getSeconds()).slice(-2);
 
alert( "Nous sommes le "+jour+"/"+mois+"/"+annee+" et il est "+heure+" heure "+minute+" minutes "+seconde+" secondes" );