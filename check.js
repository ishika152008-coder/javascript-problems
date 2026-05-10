function checkElement(arr, value) {

    if(arr.includes(value)){
        return "found";
    }else{
        return "not found";
    }

}

console.log(checkElement([1,2,3,4], 3));