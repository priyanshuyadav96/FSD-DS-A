// let arr=[1,2,3,4,5,6]
// let newar=arr.map((x)=>x*2)
// console.log(newar)

// let newar=arr.filter(x=>x%2==0);
// console.log(newar)

// let newar=arr.filter(x=>x%2==0).map(x=>x*3)
// console.log(newar)

// let newar=arr.reduce((x,y)=>x+y,0)
// console.log(newar)

// let newar=arr.filter(x=>x%2==0).map(x=>x*4).reduce((x,y,z)=>x+y+z,0)
// console.log(newar)


const students=[
    {name:"alice",
        score:60},
    {name:"bob",
        score:65},
    {name:"charlie",
        score:80},
    {name:"david",
        score:54},
    ];

const newar=students.filter((students)=>students.score>60).map(students=>students.score*2).reduce((x,y)=>x+y,0)
console.log(newar)  