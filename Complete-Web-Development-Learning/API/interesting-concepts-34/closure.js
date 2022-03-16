// function stopWatch() {
//     let counter = 0
//     return function () {
//         counter++
//         return counter
//     }
// }
// const x = stopWatch()
// console.log(x());
// console.log(x());
function stopWatch() {
    let counter = 0;
    return function () {
        counter++
        return counter
    }
}
const watch1 = stopWatch();
console.log(watch1());
console.log(watch1());