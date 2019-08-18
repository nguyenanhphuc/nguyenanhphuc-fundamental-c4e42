console.log ("Homework")
const quiz = [
    {
        q: "How many legs an octopus has:",
        a: ["1. One leg",
            "2. Two legs",
            "3. Four legs",
            "4. Eight legs"
            ],
        c: 4,
    },
    {
        q: "What is the name of Vietnam capital:",
        a: ["1. Hochiminh",
            "2. Hanoi",
            "3. Danang",
            "4. Hoian"],
        c: 2,
    },
    {
        q: "Who is the director of Titanic:",
        a: ["1. James Cameron",
            "2. Christopher Lonan",
            "3. Victor Vũ",
            "4. Robert Zemeckis"],
        c: 1,
    },
    {
        q: "How many countries in the world:",
        a: ["1. 185",
            "2. 190",
            "3. 195",
            "4. 200"],
        c: 3,
    }
]

let count = 0
for (let i=0; i<quiz.length; i++) {
    console.log(quiz[i].q,quiz[i].a)
    const ans = prompt("Your answer:")
    if (ans == quiz[i].c) {
    console.log ("Hura!!!")
    count += 1
    }
    else {
    console.log ("Not a correct answer :’(")
    }
}
console.log("Your have",count/quiz.length*100+'%',"correct answers")
