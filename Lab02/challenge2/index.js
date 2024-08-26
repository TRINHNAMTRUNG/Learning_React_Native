const printForecast = (arrTemperatures) => {
    let str = "";
    arrTemperatures.forEach((element, index) => {
        str += `... ${element}oC in ${index + 1} days`;
    });
    console.log(str + " ...");
}

let arrTemperatures = [17, 21, 23]
printForecast(arrTemperatures);