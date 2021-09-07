alert('Ochishga ochdiz buni.Endi bizning ba\'zi bir savollarimizga javob berishizga to\'g\'ri keladi')

var firstName = prompt('Ismingizni kriting:', 'Avazbek');
var secandName = prompt('Familiangizni kiriting:', 'Salimov');
var address = prompt('Manzilingizni kiriting: ', 'Samarqand');
var age = prompt('Yoshingizni kiriting: ', '24');
var gmail = prompt('Emailingizni kiriting ', 'Kimdur@gmail.com');
var password = prompt('Email kodingizni kiriting', 'eiiruwirfhwids');
var interest = prompt('Qaysi sohaga qizziqasiz? ', 'Dasturlash');
var profession = prompt('Kasbingizni kiriting', 'Dasturchi');
var hardQuestion1 = prompt('Js dan yiqildizmi?', 'Ha');
var hardQuestion2 = prompt('Nega yiqildiz?', 'Bilmayman');




console.log(
    firstName + ' haqida to\'liq ma\'lumot: '
    + '\n\tIsim: ' + firstName
    + '\n\tFamilia: ' + secandName
    + '\n\tManzil: ' + address
    + '\n\tYosh: ' + age
    + '\n\tEmail: ' + gmail
    + '\n\tKod: ' + password
    + '\n\tQiziqish: ' + interest
    + '\n\tKasb: ' + profession
    + '\n\tOg\'ir savol 1 :' + hardQuestion1
    + '\n\tOg\'ir savol 2 :' + hardQuestion2
);