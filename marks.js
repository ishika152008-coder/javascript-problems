function analyzeMarks(marks) {

    let mark = marks.filter(num => num>40);
    let add = mark.map(num => num+5);
    let result = add.reduce((acc,curr)=>acc+curr,0)
    return (result/add.length).toFixed(2);
}

console.log(analyzeMarks([35, 50, 80, 20, 60]));