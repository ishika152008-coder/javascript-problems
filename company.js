function analyzeEmployees(employees) {

    let person = employees.filter(emp => emp.department == "IT");
    let salary = person.map(sl => sl.salary+sl.salary*0.1);
    let total = salary.reduce((acc,curr)=>acc+curr,0);
    return total;
}

let employees = [
    {name: "Aman", salary: 50000, department: "IT"},
    {name: "Riya", salary: 40000, department: "HR"},
    {name: "Kunal", salary: 60000, department: "IT"}
];

console.log(analyzeEmployees(employees));