// CODE here for your Lambda Classes

class Person {
    constructor(attrs){
        this.name = attrs.name;
        this.location = attrs.location;
        this.age = attrs.age;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}.`
    }

    numGrade(student){
        let masYMenos = Math.floor(Math.random() * 100);
        let gradeAugment = Math.floor(Math.random() * 10);
        switch(masYMenos % 2 === 0) {
            case true:
                student.grade += gradeAugment;
                return `${this.name} has given ${student.name} ${gradeAugment} points to their grade`;
                break;
            case false:
                student.grade -= gradeAugment;
                return `${this.name} has taken  ${gradeAugment} points from ${student.name}'s grade`;
                break;
        }
    }

}

class Student extends Person {
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }

    listsSubjects() {
         this.favSubjects.forEach(favSub => console.log(favSub));
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}. `
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge of ${subject}.`
    }

    graduate(){
        switch(this.grade < 71) {
            case true: 
            return `${this.name} has failed. Study up and try again`;
            break;
            case false: 
            return `${this.name} has passed! ${this.name} graduates!`;
            break;
        }
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name} on ${subject}.`;
    }
}

const tommy = new Student({
    name: 'Tommy',
    age: 31,
    location: 'Florida',
    previousBackground: 'Html, CSS, and a small amount of JavaScript.',
    className: 'CS21',
    favSubjects: ['CSS', 'JavaScript', 'Python'],
    grade: 100
})

const may = new Student({
    name: 'May',
    age: 25,
    location: 'Washington',
    previousBackground: 'Being an extrovert.',
    className: 'CS21',
    favSubjects: ['CSS', 'JavaScript', 'Python', 'Debugging'],
    grade: 95
})

const kevin = new Student({
    name: 'Kevin',
    age: 22,
    location: 'Azeroth',
    previousBackground: 'Slaying noobs',
    className: 'CS21',
    favSubjects: ['CSS', 'JavaScript', 'Python', 'Debugging', 'League of Legends 101'],
    grade: 65
})

const dan = new Instructor({
    name: 'Dan',
    age: '29',
    location: 'Mars',
    specialty: 'Front End',
    favLanguage: 'JavaScript',
    catchPhrase: 'Kitler'
})

const josh = new Instructor({
    name: 'Josh',
    age: '30',
    location: 'California',
    specialty: 'Teaching',
    favLanguage: 'CSS',
    catchPhrase: 'Pixel Perfect'
})

const amir = new ProjectManager({
    name: 'Amir',
    age: '33',
    location: 'Midwest',
    specialty: 'Front End',
    favLanguage: 'JavaScript',
    catchPhrase: 'Stand Up',
    gradClassName: 'CS18',
    favInstructor: 'Josh Knell'
})

const mary = new ProjectManager({
    name: 'Mary',
    age: '22',
    location: 'New York',
    specialty: 'Front End',
    favLanguage: 'English',
    catchPhrase: 'Start a party',
    gradClassName: 'CS18',
    favInstructor: 'Dan Levy'
})

console.log(dan.numGrade(kevin));
console.log(kevin.grade);
console.log(kevin.graduate());