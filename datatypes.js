var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var eployee;
eployee = ["sure", "joh", "rishi", "comal"];
console.log();
var ar1;
var ar2;
ar1 = [1, 2, 3, 4, 5, 6, 5, 7, 8, 8, 8, 5, 9];
ar2 = [3, 6, 8, 9, 0, 5, 3, 7];
var ti1 = new Set(ar1);
var ti2 = new Set(ar2);
var fil = __spreadArray(__spreadArray([], ar1.filter(function (ooo) { return !ti2.has(ooo); }), true), ar2.filter(function (ooo) { return !ti1.has(ooo); }), true).sort(function (a, b) { return a - b; });
// console.log(fil);
var redu = ar1.filter(function (tie) { return ar2.includes(tie); });
// console.log(redu);
var rqe = eployee.find(function (gk) { return gk === "coml"; });
// console.log(rqe);
var call1;
call1 = [34, 5, 6];
var fin = call1.reduce(function (inn, ooo) { return inn + ooo; });
var c = 1 /* color.white */;
console.log(c);
