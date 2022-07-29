import { type } from "@testing-library/user-event/dist/type"

type CityType = {
    title: string
    countryTitle: string
}

type AdresssType = {
    streetTitle : string
    city: CityType

}

type TechType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActiv: boolean
    addresss: AdresssType
    technologies: Array <TechType>
}



const student = {
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

console.log (student.age)
console.log (student.name)
console.log (student.addresss.city.title)
console.log (student.technologies[2].title)

/*const scool = {
    name: "IT-incubator",
    isOpen: true,
    mentores: ["Igor", "Snesgana"]
}*/