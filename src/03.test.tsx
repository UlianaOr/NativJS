import {  StudentType } from "./02";
import { addSkill } from "./03";


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

})