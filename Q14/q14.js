var object1 = {
    "Name" : "Ram",
    "Age" : "25",
    "Yuga" : "Treta"
};

var object2 = {
    "Name" : "Krishna",
    "Age" : "31",
    "Yuga" : "Dwapar"
}

function older(object1, object2){
    if(object1.Age > object2.Age){
        console.log(object1.Name);
    } else {
        console.log(object2.Name); 
    }
}

older(object1, object2);

