import {  StudentType } from "./02";
import { addSkill, makeStudentActiv } from "./03";


let student: StudentType;
beforeEach(()=> {
    student = {
        id: 1,
        "name": "Uliana",
         age: 36,
         isActiv: false,
         addresss: {
            streetTitle: "PerisCelda 15",
            city: {
                title: "Valencia",
                countryTitle: "España"
            }
         },
         technologies: [
            {
                id: 1,
                title: "HTML5"
            },
            {
                id: 2,
                title : "CSS"
            },
            {
                id: 3,
                title: "React"
            }
         ]
    

    }
})


test ("new tech skill shoold be added to student", ()=> {
    expect (student.technologies.length). toBe (3)
    addSkill (student, "JS");

    expect (student.technologies.length). toBe(4);
    expect (student.technologies[3].title). toBe("JS");
    expect (student.technologies[3].id).toBeDefined();

})


test ("student should be made activ", ()=> {
    expect (student.isActiv). toBe (false)

    makeStudentActiv (student);

    expect (student.isActiv). toBe (true);

})