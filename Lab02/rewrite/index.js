// Fillter
const numbers = [4, 9, 16, 25, 45];

Array.prototype.myfilter = function(callback) {
    let result = [];
    this.forEach((element, index, array) => {
        if (callback(element, index, array)) {
            result.push(element);
        }
    });
    return result;
};

let value = numbers.myfilter((element, index, array) => element > 10);
console.log("fillter: ", value);


// Find

Array.prototype.myFind = function(callback) {

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};
let find = numbers.myFind((element, index, array) => element == 45);
console.log("find: ", find);

//every


Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

let every = numbers.myEvery((element, index, array) => element >= 4);
console.log("every: ", every);

//some


Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

let some = numbers.mySome((element, index, array) => element < 0);
console.log("some: ", some);