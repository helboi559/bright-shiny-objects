// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
//CREATE USER
const createUser = function(first,last) {
    //set empty user var to collect info
    let user = {};
    //set info to first/last
    user['firstName']=first;
    user['lastName']=last;
    return user
}

// SET AGE

const setAge = function(user, actualAge) {
    //set age property w/ the actualAge as the value
    user['age'] = actualAge;
    return user;
}

//INCREMENT AGE
const incrementAge =function(user) {
    //access age prop and increase value by 1
    user.age ++
    return user
}

//FIX CAR
const fixCar = function(car) {
    car.needsMaintenance = false
    return car
}

// ADD GRADES
const addGrades = function(student, newGrades) {
    //access student grades and concat newGrades to list
    student.grades = student.grades.concat(newGrades)
    return student
}

// GET DATA TYPE
const getDataType = function(car,key) {
    return typeof car[key]
}

//ADD TO-DO
const addTodo = function(todo,newToDoItem) {
    //directly add item to array
    todo.push(newToDoItem)
    return todo
}
//ADD SONG
const addSong = function(list, track) {
    //output:update durantion && add new track
    //add song
    list.songs.push(track);
    //update duration of list by increasing it by last item
    list.duration += list.songs[list.songs.length-1].duration
    return list
}

//UPDATE REPORTCARD
const updateReportCard = function(reportCard, newGrade) {
    //add the newGrade
    reportCard.grades.push(newGrade)
    //get highest/lowest/avg grades
    let highest = -Infinity
    let lowest = Infinity
    let avg  = getAvg(reportCard.grades)  
    //check grades list and identify high/low/etc 
    for(let i = 0 ; i < reportCard.grades.length; i++) {
      if(highest < reportCard.grades[i] ) {
        highest = reportCard.grades[i]
      }
      if (lowest > reportCard.grades[i]) {
        lowest = reportCard.grades[i]
      }
    }
    //update values in object
    reportCard.lowestGrade = lowest;
    reportCard.highestGrade = highest;
    reportCard.averageGrade = avg
    //return same report card
    return reportCard
}
//helper function to get average
const getAvg = function(arr) {
    let sum = 0
    for(let num of arr) {
        sum += num
    }
    return sum/arr.length
}
// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
