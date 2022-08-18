let listPemain = [
    {
        nama : "Dimas",
        score : 0
    },
    {
        nama : "Karman",
        score : 0
    },
    {
        nama : "Sam",
        score : 0
    },
    {
        nama : "Yasmin",
        score : 0
    },
];

function dadu () {
    let lempar = Math.ceil(Math.random()*6);
    
    return lempar;
}

function bermain(listPemain) {
    for (let i = 0; i < listPemain.length; i++) {
        listPemain[i].score += dadu()
        console.log(listPemain[i].score)
        if (listPemain[i].score >= 20) {
            return `selamat kamu menang ${listPemain[i].nama}`
        } 
    }

    return bermain(listPemain)
}


console.log(bermain(listPemain))
