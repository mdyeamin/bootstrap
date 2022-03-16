function welcomeMessage(gridHandler) {

    console.log(gridHandler);
    gridHandler()
}
// const name = ['tom Hangs', 'tom crus']
// const name = { name: 'tom crus', age: 11 }
function gridMorning() {
    console.log('good morning');
}
welcomeMessage(gridMorning)