const student = {
    id: 101,
    name: 'RJ kibria',
    money: 5000,
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFrind: {
        name: 'kundu',
        major: 'mathematics'
    },
    taceExam: function () {
        console.log(this.bestFrind.name, 'taking exam');
    },
    treatDay: function (expence, boksish) {
        this.money = this.money - expence - boksish;
        return this.money
    }
}

student.taceExam()
console.log(student.treatDay(900, 100));