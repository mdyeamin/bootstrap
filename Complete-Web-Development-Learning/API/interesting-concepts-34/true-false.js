/* 
falsy
false
0
empty string
null
NaN
undefined
---------------------------
-                           -
---------------------------
truthy
true
any number (positive or negatice)
any string including    single whitespace
[]
{}
infinity
anything else that is not false will be truthy
*/
const x = Infinity;
if (x) {
    console.log('x is truthy');
}
else {
    console.log('x is falsy');
}