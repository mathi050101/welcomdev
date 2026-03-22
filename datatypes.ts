let eployee: Array<string>
eployee = ["sure","joh","rishi","comal"];
console.log();

let ar1: Array<number>;
let ar2: Array<number>;

ar1 = [1,2,3,4,5,6,5,7,8,8,8,5,9];
ar2 = [3,6,8,9,0,5,3,7];
const ti1 = new Set(ar1);
const ti2 = new Set(ar2);
let fil = [...ar1.filter(ooo => !ti2.has(ooo)), ...ar2.filter(ooo => !ti1.has(ooo))].sort((a,b) => a-b);
// console.log(fil);

let redu = ar1.filter(tie => ar2.includes(tie));
// console.log(redu);
let rqe = eployee.find((gk) => gk === "coml");
// console.log(rqe);
let call1: number[];
call1 = [34,5,6];
let fin = call1.reduce((inn,ooo) => inn + ooo);
// console.log(fin);

const enum color{
    gray,
    white,
    yello
}

let c: color = color.white;
console.log(c);