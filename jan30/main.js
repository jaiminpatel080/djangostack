let students = [
    {
        "name":"Karan",
        "marks":{
            "english":100,
            "maths":70,
            "science":50,
        }
    },
    {
        "name":"Jaimin",
        "marks":{
            "english":100,
            "maths":70,
            "science":50,
        }
    },
    {
        "name":"Kevin",
        "marks":{
            "english":100,
            "maths":70,
            "science":50,
        }
    }
]

students.map((m)=>{
    console.log(m.name, "\n\tenglish :", m.marks.english, "\n\tmaths :", m.marks.maths, "\n\tscience :", m.marks.science,)
    console.log("-------------------------------------------")
})
