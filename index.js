/* Your Code Here */
function createEmployeeRecord (array){
    let employee = {
        firstName:array[0],
        familyName:array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employee;
}

function createEmployeeRecords(array){
    let records = []
    for (let i of array){
        records.push(createEmployeeRecord(i));
    }

    return records;
}

function createTimeInEvent(date){
    let hr = (date.split(' ')[1])
    let day = (date.split(' ')[0])
    
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hr),
        date: day
    })

    return this;
}

function createTimeOutEvent(date){
    let hr = (date.split(' ')[1])
    let day = (date.split(' ')[0])

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hr),
        date: day
    })

    return this;
}

function hoursWorkedOnDate(date){
    let day = (date.split(' ')[0])

    let startHour, endHour;
    
    let start = this.timeInEvents.find((time)=>{
        if(time.date == day){
            startHour = time.hour/100
            return startHour
        }
    })

    let end = this.timeOutEvents.find((time)=>{
        if(time.date == day){
            endHour = time.hour/100
            return endHour
        }
    })
    
    return parseInt(endHour) - parseInt(startHour);
}


function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    let rate = parseInt(this.payPerHour)

    return hours*rate;
}



function allWagesFor(){
    let wage = 0
    let time = this.timeInEvents; 

    for (let day of time){
        wage += wagesEarnedOnDate.call(this, day.date)
    }
    
    return wage;
}


function calculatePayroll (array){
    let payroll = 0
    for(let employee of array){
        payroll += allWagesFor.apply(employee)
    }

    return payroll;
}


function findEmployeeByFirstName(srcArray, firstName){
    for (let record of srcArray){
        if (record.firstName == firstName){
            return record;
        }
    }
}



