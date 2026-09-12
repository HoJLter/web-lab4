import {faker} from '@faker-js/faker'

class Student{
    name: string;
    surname: string;
    patronymic: string;
    group: string;
    grades: number[];
    meanGrade: number;

    constructor(name: string,
                surname: string,
                patronymic: string,
                group: string,
                grades: number[]) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.group = group;
        this.grades = grades;
        this.meanGrade = this.calcMeanGrade();
    }

    public isGoodStudent(): boolean{
        let flag: boolean = true;
        for (let i = 0; i < this.grades.length; i++){
            if (this.grades[i] <= 3){
                flag = false;
                break;
            }
        }
        return flag;
    }

    public showStudentInfo(): void{
        console.log(`${this.name} ${this.surname} ${this.patronymic} Group: ${this.group} Mean grade: ${this.meanGrade}`)
    }

    private calcMeanGrade(): number{
        return this.grades.reduce((sum, cur) => sum += cur)/this.grades.length;
    }
}

function createRandomStudent(): Student{
    return new Student(
        faker.person.firstName(),
        faker.person.lastName(),
        faker.person.middleName(),
        `ГР-${faker.number.int({ min: 100, max: 999 })}`,
        faker.helpers.multiple(
            () => faker.number.int({ min: 3, max: 5 }),
            { count: 5 }
        )
    );


}

function showGoodStudents(studs: Student[]){
    let sortedStuds:Student[] = studs.sort((a: Student, b: Student) =>  a.meanGrade - b.meanGrade);
    for (let student of sortedStuds){
        if (student.isGoodStudent()){
            student.showStudentInfo();
        }
    }
}

let students: Student[] = [];

for (let i = 0; i < 20; i++){
    students.push(createRandomStudent());
}

showGoodStudents(students);