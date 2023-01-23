// 1

let n = 100;

for (let i = 0; i <= n; i++) {
    console.log(i);     
}


// 2

let b = 0, m = 50;


while (b <= m) {
    console.log(i);
    b += 1;
}


// 3

let j = 0;
let c = 150;

do {
    console.log(j);
    j++;
} while(j <= c);


// 4

let numberArray=[];
for (let i = 0; i < 10000; i++) {
    numberArray.push(i * i);
}
console.log(numberArray);


// 5

let cars = ["nissan", "toyota", "bmw", "mercedes", "honda"];

cars.push('ford');
console.log(cars);

cars.pop(`toyota`);
console.log(cars);

cars.unshift(`ford`, `mercedes`);
console.log(cars);

cars.shift(`bmw`, `nissan`);
console.log(cars);