var readline = require("readline-sync");

let studentsList = [
    {
        roll_no: 9001,
        name: "Keerthi",
        class: 9,
        gender: "F",
        test_score:[]
    },
    {
        roll_no: 9002,
        name: "Arun",
        class: 9,
        gender: "M",
        test_score:[]
    },
    {
        roll_no: 9003,
        name: "Anusha",
        class: 9,
        gender: "F",
        test_score:[]
    },
    {
        roll_no: 9004,
        name: "Akshara",
        class: 9,
        gender: "F",
        test_score:[]
    },
    {
        roll_no: 9005,
        name: "Sneha",
        class: 9,
        gender: "F",
        test_score:[]
    },
    {
        roll_no: 8001,
        name: "Pallavi",
        class: 8,
        gender: "F",
        test_score:[]
    },
    {
        roll_no: 8002,
        name: "Jnanavi",
        class: 8,
        gender: "F",
        test_score:[]
    },
    {
        roll_no: 8003,
        name: "Prashanth",
        class: 8,
        gender: "M",
        test_score:[]
    },
    {
        roll_no: 8004,
        name: "Dheeraj",
        class: 8,
        gender: "M",
        test_score:[]
    },
    {
        roll_no: 8005,
        name: "Likhith",
        class: 8,
        gender: "M",
        test_score:[]
    },
    {
        roll_no: 7001,
        name: "Aravind",
        class: 7,
        gender: "M",
        test_score:[]
    },
    {
        roll_no: 7002,
        name: "Akshay",
        class: 7,
        gender: "M",
        test_score:[]
    },
    {
        roll_no: 7003,
        name: "Pooja",
        class: 7,
        gender: "F",
        test_score:[]
    },
    {
        roll_no: 7004,
        name: "Poorvi",
        class: 7,
        gender: "F",
        test_score:[]
    },
    {
        roll_no: 7005,
        name: "Akshatha",
        class: 7,
        gender: "F",
        test_score:[]
    },
    {
        roll_no: 6001,
        name: "Chandana",
        class: 6,
        gender: "F",
        test_score:[]
    },
    {
        roll_no: 6002,
        name: "Ajay",
        class: 6,
        gender: "M",
        test_score:[]
    },
    {
        roll_no: 6003,
        name: "Rathna",
        class: 6,
        gender: "F",
        test_score:[]
    },
    {
        roll_no: 6004,
        name: "Harsha",
        class: 6,
        gender: "M",
        test_score:[]
    },
    {
        roll_no: 6005,
        name: "Karthik",
        class: 6,
        gender: "M",
        test_score:[]
    }
]

let studentsList1 = [];

function randomNo (min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


function takeTest ()
{
    studentsList.map(x => x.test_score.push({sub_name: "Kannada", marks: randomNo(30, 90)}, {sub_name:"English", marks: randomNo(30, 90)}, {sub_name:"Hindi", marks: randomNo(30, 90)}))
    // console.log(studentsList);
    // console.log(studentsList.map(x => x.test_score));
    console.table(studentsList, ["roll_no", "name", "class", "gender"]);
}

function viewResult ()
{
        studentsList.map(x => {
        let ttlMarks = 0;
        x.test_score.map(y => {
            ttlMarks = ttlMarks + y.marks;
        })
        x.total_marks = ttlMarks;
        x.percentage = Math.ceil((ttlMarks * 100) / 300);
        // console.log(`|   ${x.roll_no}   |    ${x.class}    |     ${ttlMarks}      |      ${x.percentage}      |`);
    })
    console.table(studentsList, ["roll_no", "class", "total_marks", "percentage"]);
}

function viewStudentsResult ()
{
    let tms = 0;
    studentsList.forEach(x => {
        x.test_score.forEach(y => {
            tms += x.percentage;
        })
    })


    if (tms > 0)
    {
        console.table(studentsList, ["roll_no", "class", "total_marks", "percentage"]);
    }
    else
    {
        let sid = readline.question("Enter student roll number : \n");
        let f = studentsList.filter(x => x.roll_no == sid);
        let ttlmks = 0;
        f.map(x => x.test_score.forEach(y => ttlmks += y.marks))

        let ppnt = Math.round((ttlmks*100)/300);

        let stdrest = [{total_marks: ttlmks, percentage: ppnt}]
        console.table(stdrest, ["total_marks", "percentage"]);
    }
}

function viewClasswiseResult ()
{
    console.log("Class 6th result");
    let s1 = studentsList.filter(x => x.class == 6)
    console.table(s1, ["roll_no", "name", "class", "total_marks", "percentage"]);

    console.log("Class 6th result");
    let s2 = studentsList.filter(x => x.class == 7)
    console.table(s2, ["roll_no", "name", "class", "total_marks", "percentage"]);

    console.log("Class 6th result");
    let s3 = studentsList.filter(x => x.class == 8)
    console.table(s3, ["roll_no", "name", "class", "total_marks", "percentage"]);

    console.log("Class 6th result");
    let s4 = studentsList.filter(x => x.class == 9)
    console.table(s4, ["roll_no", "name", "class", "total_marks", "percentage"]);
}

function detailAnalysisOfResult ()
{
    let c6 = studentsList.filter(x => x.class == 6);

    analysisOfResult(c6);

    // let detailAnalysis = [];
    // console.table(detailAnalysis);

}

function analysisOfResult (c)
{
    let cls = 0;
    c.forEach(x => cls = x.class);
    
    let ttlmrks = 0;
    c.map(x => {
        ttlmrks += x.total_marks
    })
    let avgttlmrks = Math.floor(ttlmrks/c.length);


    let perc = 0;
    c.map(x => {
        perc += x.percentage
    })
    let avgperc = Math.floor(perc/c.length);

    let grade = "";
    if (avgperc >= 90)
    {
        grade = "A+";
    }
    else if (avgperc >= 80 && avgperc < 90)
    {
        grade = "A";
    }
    else if (avgperc >= 70 && avgperc < 80)
    {
        grade = "B+";
    }
    else if (avgperc >= 50 && avgperc < 70)
    {
        grade = "B";
    }
    else if (avgperc >= 40 && avgperc < 50)
    {
        grade = "C+";
    }
    else
    {
        grade = "C";
    }

    let failedStdCnt = 0;
    c.forEach(x => {
        if (x.percentage < 45)
        {
            failedStdCnt += 1;
        }
    })
    console.log(failedStdCnt+"FC");

    let obj = {class: cls, avg_ttl_mrks: avgttlmrks, avg_perctg: avgperc, overall_grade: grade, }
}


function studentsMethod ()
{
    let opt = readline.question("Choose  a option : \n1.Take Test \n2.View Result \n3.View Students Result \n4.View Classwise Result \n5.Detail Analysis of Result \n6.Exit \n");
    if (opt == 1)
    {
        takeTest();

        studentsMethod();
    }
    else if (opt == 2)
    {
        viewResult();

        studentsMethod();
    }
    else if (opt == 3)
    {
        viewStudentsResult();

        studentsMethod();
    }
    else if (opt == 4)
    {
        viewClasswiseResult();

        studentsMethod();
    }
    else if (opt == 5)
    {
        detailAnalysisOfResult();

        studentsMethod();
    }
    else if (opt == 6)
    {
        console.log("Thank You \n");
        return;
    }
    else
    {
        console.log("Enter valid options \n");
        studentsMethod();
    }
}

studentsMethod();