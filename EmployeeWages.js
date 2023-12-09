
// [
// 	{
// 		eid: 101, 
// 		name: "Abc", 
// 		workRecord: [ {day: , workHrs: , wage: }]
// 	}
// ]
// - create record for months
// - compute monthly wage
// - can have 20 working days only
//wage = workHrs*20
let employeeDetails = [
	{
		eid: 101, 
		name: "uday", 
		workRecord: []
	},
    {
		eid: 102, 
		name: "kiran", 
		workRecord: []
	},
    {
		eid: 103, 
		name: "vinay", 
		workRecord: []
	},
    {
		eid: 104, 
		name: "rajiv", 
		workRecord: []
	},
    {
		eid: 105, 
		name: "venky", 
		workRecord: []
	},
    {
		eid: 106, 
		name: "shiva", 
		workRecord: []
	},
    {
		eid: 107, 
		name: "venkat", 
		workRecord:[]
	},
    {
		eid: 108, 
		name: "dattu", 
		workRecord:[]
	},
    {
		eid: 109, 
		name: "mahesh", 
		workRecord: []
	},
    {
		eid: 110, 
		name: "virat", 
		workRecord: []
	},


]
function random(atn){

    if (atn == "Present")
    {
        let work = Math.round(Math.random())
        if(work ==0){
            workHrs = 4
        }
        else{
            workHrs = 8
        }
        return workHrs
    }
    else
    {
        workHrs = 0;
        return workHrs;
    }
}


let wage = 0
let monthlyWage = 0
function workDetailes(){

    employeeDetails.forEach((ele)=>{
        let id = 0
        let wage = 0
        let monthlyWage = 0

        let workingdays = 0;
        for(id =1;id <= 30;id++){
            let attendce = Math.floor(Math.random()*(1+0+1)+0);
            let atn = attendce == 1 ? "Present" : "Absent";

            if (atn == "Present")
            {
                workingdays += 1;
            }

            if (workingdays > 20)
            {
                atn = "Absent";
            }
            ele.workRecord.push({Day:id, workHrs:random(atn), wage:workHrs*20, attendance:atn})

            monthlyWage += wage

        }
        ele.monthlyWage = monthlyWage


    })
   // console.log(employeeDetails);
    console.log(employeeDetails[0].workRecord);
}
workDetailes()
