
export const cpp: Subjects.Cpp = new Subjects.Cpp()
export const java: Subjects.Java = new Subjects.Java()
export const react: Subjects.React = new Subjects.React()

export const cTeacher: Subjects.Teacher  = {
    firstName: "Zuhair",
    lastName: "Ahmed",
    experienceTeachingC: 10
}

console.log("C++");
cpp.setTeacher = cTeacher;
console.log(cpp.getAvailableTeacher());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getAvailableTeacher());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher = cTeacher;
console.log(react.getAvailableTeacher());
console.log(react.getAvailableTeacher());

