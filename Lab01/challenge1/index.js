const bmi = (person) => {
    try {
        let BMI = person.mass / Math.pow(person.height, 2);
        return BMI.toFixed(2);
    } catch (error) {
        console.log(">>>> Error: ", error);
    }
}

function Person(name, mass, height) {
    this.name = name;
    this.mass = mass;
    this.height = height
}

const check = () => {
    let Join = new Person("Join", 92, 1.95);
    let Mark = new Person("Mark", 78, 1.69);
    // let Join = new Person("Join", 85, 1.76);
    // let Mark = new Person("Mark", 95, 1.88);
    let ibmMark = bmi(Mark);
    let ibmJoin = bmi(Join);
    const markHigherBMI = ibmMark > ibmJoin;
    console.log(`IBM Mark ${ibmMark}`, (markHigherBMI ? "is higher" : "is lower"), `than IBM Join ${ibmJoin}`);
}
check();