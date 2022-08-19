let topSkor = {};

let users = [
    {
        name: prompt("nama pemain 1"),
        score: 0
    },
    {
        name: prompt("nama pemain 2"),
        score: 0
    },
    {
        name: prompt("nama pemain 3"),
        score: 0
    },
];

function inpuTopSkor() {
    for (let i = 0; i < users.length; i++) {
        
        if (!topSkor[users[i].name]) {
            topSkor[users[i].name] = {};
            topSkor[users[i].name].name = users[i].name
            topSkor[users[i].name].leader = 0;

        }
    }

    console.log(topSkor)

    // klasemen()
}


let currentUser = 0;
showCurrentUser();

function lemparDadu() {
    let random = Math.ceil(Math.random() * 6);
    if (random === 0) {
        random = 1
    }
    let angkaDadu = document.getElementById("demoDadu");
    angkaDadu.innertext = random;
    users[currentUser].score += random;

    let dadu = document.getElementById("scorePlayer");
    dadu.innerText = random;


    if (currentUser === users.length - 1) {
        currentUser = 0;
    } else {
        currentUser++
    }
    playMusic()
    klasemen()
    renderLintasan()
    showCurrentUser();
}

function showCurrentUser() {
    let activeUser = users[currentUser];
    let currentPlayerDOM = document.getElementById("currentPlayer");
    currentPlayerDOM.innerText = `Current : ${activeUser.name}`;

    let pre = currentUser - 1
    if (currentUser === 0) {
        pre = 2
    }
    

    let previousPlayerDOM = document.getElementById("previousPlayer");
    previousPlayerDOM.innerText = `Prev : ${users[pre].name}`;
    console.log(pre)

    renderAllUser();
}

function renderAllUser() {
    

    let p1 = document.getElementById("p1")
    p1.innerText = users[0].name;
    let p2 = document.getElementById("p2")
    p2.innerText = users[1].name;
    let p3 = document.getElementById("p3")
    p3.innerText = users[2].name;

    getWinner()
}

function getWinner() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].score >= 34) {
            // alert(`Winner: ${users[i].name}`);
            Swal.fire(
                `Winner: ${users[i].name}`,
                'Cie menang! Slamet dah...',
                'success',
            ).then(function () {
                // topSkor[users[i].name].leader++;
                inpuTopSkor()
                resetGame()
                showCurrentUser()
            })

        }
    }
}

function resetGame() {
    for (let i = 0; i < users.length; i++) {
        users[i].score = 0
    }
    klasemen()
    renderLintasan()
    showCurrentUser()
}

function gantiPemain() {
    users = [
        {
            name: prompt("nama pemain 1"),
            score: 0
        },
        {
            name: prompt("nama pemain 2"),
            score: 0
        },
        {
            name: prompt("nama pemain 3"),
            score: 0
        },
    ];
    renderLintasan()
    showCurrentUser();
}

function klasemen() {
    let listDom = document.getElementById("list");
    listDom.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        listDom.innerHTML += `<li>${users[i].name} = ${users[i].score}</li>`
    }
}

function renderLintasan() {
    let percentage = (users[0].score / 40) * 100;
    if (percentage > 100) {
        percentage = 75
    }
    document.getElementById("pemain1").style = `left:${percentage}%`
    let percentage2 = (users[1].score / 40) * 100;
    if (percentage2 > 100) {
        percentage2 = 75
    }
    document.getElementById("pemain2").style = `left:${percentage2}%`
    let percentage3 = (users[2].score / 40) * 100;
    if (percentage3 > 100) {
        percentage3 = 75
    }
    document.getElementById("pemain3").style = `left:${percentage3}%`
}
function playMusic() {
    music.play();
}


