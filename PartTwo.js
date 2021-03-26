
// Part 2-0

function convertCSVtoTable(){

    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
        
    let rows = data.split("\n");

    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    console.log(rows);

}


// Part 2-1
function sumAges(){
    
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
       
        // converting string data into an array
        // splitting the data into rows
    let rows = data.split("\n"); 
        
    for(let i = 0; i < rows.length; i++){
        // taking each row and splitting it up into columns
        rows[i] = rows[i].split(", ")
    }
        // setting total variable to zero
    let total = 0;
        // looping through each row 
    for(let i = 0; i < rows.length; i++){
        // we are adding the age of each person and converting it to a number value
        let age = Number(rows[i][1]);
        // we are incrementing the total variable with each age field in the data
        total += age;
    }

    console.log(total);
}



// i    age   total     average  
// 1     24    24                              
// 2     39    63             
// 3     18    81
// 4     589   670 
// 5     65    735        147  


// Part 2-2
function findAverageAge(){

    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
        
    let rows = data.split("\n");

    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    let total = 0;

    for(let i = 1; i < rows.length; i++){
        let age = Number(rows[i][1]);
        total += age;
    }
    // we are creating a variable for average and setting the value to the 
    // total amount of ages divided by each row
    let average = total/(rows.length - 1)

    console.log(average);

}

// Part 2-3
function fineLargestAge(){

    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let rows = data.split("\n");

    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    let largest = -1;
    // we are finding the oldest person in the table of data and returning that age
    for(let i = 1; i < rows.length; i++){
        let age = Number(rows[i][1]);
        if(largest < age){
            largest = age;
        }
    }
        
    console.log(largest);

}

//Part 2-4
function findOldestPerson(){

    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let rows = data.split("\n");

    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    let largest = -1;
    let person;

    for(let i = 1; i < rows.length; i++){
        let age = Number(rows[i][1]);
        if(largest < age){
            largest = age;
            person = rows[i][0]
        }
    }

    console.log(person);

}