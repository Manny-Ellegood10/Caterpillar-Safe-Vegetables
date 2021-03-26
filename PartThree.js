
class PartThree {

    findYoungest(data){
        let rows = data.split("\n");

    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    let youngest = -1;
    let person;

    for(let i = 1; i < rows.length; i++){
        let age = Number(rows[i][1]);
        if(youngest > age){
            youngest = age;
            person = rows[i][0]
            console.log(person);
        }
    }

    return person;
    }

    findLongestName(data){
        return data;
    }

    findCoOwner(data){
        return data;
    }

    findStudents(data){
        return data;
    }

}

module.exports = PartThree;