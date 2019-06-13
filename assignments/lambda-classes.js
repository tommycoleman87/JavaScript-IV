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
}

class Student extends Person {
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
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
    favSubjects: ['CSS', 'JavaScript', 'Python']
})

const may = new Student({
    name: 'May',
    age: 25,
    location: 'Washington',
    previousBackground: 'Being an extrovert.',
    className: 'CS21',
    favSubjects: ['CSS', 'JavaScript', 'Python', 'Debugging']
})

const kevin = new Student({
    name: 'Kevin',
    age: 22,
    location: 'Azeroth',
    previousBackground: 'Slaying noobs',
    className: 'CS21',
    favSubjects: ['CSS', 'JavaScript', 'Python', 'Debugging', 'League of Legends 101']
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

console.log(may.speak());