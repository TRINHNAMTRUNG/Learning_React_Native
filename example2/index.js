const averageScore = (team) => {
    try {
        const sumScore = team.arrScore.reduce((temp, score) => temp + score, 0);
        let averageScoreTeam = sumScore / team.arrScore.length;
        return averageScoreTeam.toFixed(2);
    } catch (error) {
        console.log(">>> ERROR: ", error)
    }
}

function Team(name, arrScore) {
    this.name = name;
    this.arrScore = arrScore;
}

function determineWinnerWithMinScoreAndDraw() {
    let teamDolphins = new Team("Dolphins", [96, 108, 89]);
    let teamKoalas = new Team("Koalas", [88, 91, 110]);
    let averageScoreDolphins = averageScore(teamDolphins);
    let averageScoreKoalas = averageScore(teamKoalas);

    if (averageScoreDolphins >= 100 && averageScoreDolphins > averageScoreKoalas) {
        console.log('Dolphins thắng với điểm trung bình là ' + dolphinsAverage);
    } else if (averageScoreKoalas >= 100 && averageScoreKoalas > averageScoreDolphins) {
        console.log('Koalas thắng với điểm trung bình là ' + averageScoreKoalas);
    } else if (averageScoreDolphins >= 100 && averageScoreKoalas >= 100 && averageScoreDolphins === averageScoreKoalas) {
        console.log('Hòa, cả hai đội đều có điểm trung bình là ' + averageScoreDolphins);
    } else {
        console.log('Không đội nào thắng');
    }
}

function determineWinnerWithMinScore() {
    let teamDolphins = new Team("Dolphins", [97, 112, 101]);
    let teamKoalas = new Team("Koalas", [109, 95, 123]);
    let averageScoreDolphins = averageScore(teamDolphins);
    let averageScoreKoalas = averageScore(teamKoalas);
    console.log("averageScoreDolphins: ", averageScoreDolphins);
    console.log("averageScoreKoalas: ", averageScoreKoalas);
    if (averageScoreDolphins >= 100 && averageScoreDolphins > averageScoreKoalas) {
        console.log('Dolphins thắng với điểm trung bình là ' + averageScoreDolphins);
    } else if (averageScoreKoalas >= 100 && averageScoreKoalas > averageScoreDolphins) {
        console.log('Koalas thắng với điểm trung bình là ' + averageScoreKoalas);
    } else if (averageScoreDolphins >= 100 && averageScoreKoalas >= 100 && averageScoreDolphins === averageScoreKoalas) {
        console.log('Hòa, cả hai đội đều có điểm trung bình là ' + averageScoreDolphins);
    } else {
        console.log('Không đội nào thắng');
    }
}
determineWinnerWithMinScore();
determineWinnerWithMinScoreAndDraw();
// const diff = () => {
//     let teamDolphins = new Team("Dolphins", [96, 108, 89]);
//     let teamKoalas = new Team("Koalas", [88, 91, 110]);
//     let averageScoreDolphins = averageScore(teamDolphins);
//     let averageScoreKoalas = averageScore(teamKoalas);
//     console.log(averageScoreDolphins, ">>>", averageScoreKoalas);
// }
// diff();