import { faker } from '@faker-js/faker';
class Student {
    name;
    surname;
    patronymic;
    group;
    grades;
    meanGrade;
    constructor(name, surname, patronymic, group, grades) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.group = group;
        this.grades = grades;
        this.meanGrade = this.calcMeanGrade();
    }
    isGoodStudent() {
        let flag = true;
        for (let i = 0; i < this.grades.length; i++) {
            if (this.grades[i] <= 3) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    showStudentInfo() {
        console.log(`${this.name} ${this.surname} ${this.patronymic} Group: ${this.group} Mean grade: ${this.meanGrade}\n`);
    }
    calcMeanGrade() {
        return this.grades.reduce((sum, cur) => sum += cur) / this.grades.length;
    }
}
function createRandomStudent() {
    return new Student(faker.person.firstName(), faker.person.lastName(), faker.person.middleName(), `ГР-${faker.number.int({ min: 100, max: 999 })}`, faker.helpers.multiple(() => faker.number.int({ min: 2, max: 5 }), { count: 5 }));
}
function showGoodStudents(studs) {
    let sortedStuds = studs.sort((a, b) => a.meanGrade - b.meanGrade);
    for (let student of sortedStuds) {
        if (student.isGoodStudent()) {
            student.showStudentInfo();
        }
    }
}
let students = [];
for (let i = 0; i < 10; i++) {
    students.push(createRandomStudent());
}
showGoodStudents(students);
//# sourceMappingURL=index.js.map