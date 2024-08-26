const calcAverage = (scoreTeam) => {
    return scoreTeam.reduce((init, score) => init + score, 0) / scoreTeam.length;
}

const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= (avgKoalas * 2)) {
        console.log(`Dolhins win (${avgDolhins} vs ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolhins * 2)) {
        console.log(`Koalas win (${ avgKoalas } vs ${avgDolhins})`);
    } else {
        console.log(`No team won! (${avgDolhins} vs ${avgKoalas})`);
    }
}

let teamDolhins = [85, 54, 41];
let teamKoalas = [23, 34, 27];

checkWinner(calcAverage(teamDolhins), calcAverage(teamKoalas));