// Create an employee object
let employee = {
    id: 101,
    name: "Reejon Baruwal",
    department: "IT",
    salary: 50000
};

// Display the original object
console.log("Original Object:");
console.log(employee);

// Add a new property: address
employee.address = "Kathmandu";

console.log("After Adding Address:");
console.log(employee);

// Update the salary
employee.salary = 60000;

console.log("After Updating Salary:");
console.log(employee);

// Delete the department property
delete employee.department;

console.log("After Deleting Department:");
console.log(employee);