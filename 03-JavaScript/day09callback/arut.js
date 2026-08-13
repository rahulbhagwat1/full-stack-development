const employees = [
  { id: 1, name: "Rahul", age: 22, department: "IT", salary: 45000, city: "Pune", experience: 1 },
  { id: 2, name: "Amit", age: 28, department: "HR", salary: 55000, city: "Mumbai", experience: 5 },
  { id: 3, name: "Sneha", age: 25, department: "Finance", salary: 60000, city: "Delhi", experience: 3 },
  { id: 4, name: "Priya", age: 30, department: "IT", salary: 75000, city: "Bangalore", experience: 7 },
  { id: 5, name: "Karan", age: 27, department: "Sales", salary: 50000, city: "Hyderabad", experience: 4 },
  { id: 6, name: "Neha", age: 24, department: "Marketing", salary: 48000, city: "Pune", experience: 2 },
  { id: 7, name: "Rohan", age: 35, department: "IT", salary: 90000, city: "Mumbai", experience: 10 },
  { id: 8, name: "Anjali", age: 29, department: "Finance", salary: 65000, city: "Chennai", experience: 6 },
  { id: 9, name: "Vikas", age: 31, department: "Sales", salary: 72000, city: "Delhi", experience: 8 },
  { id: 10, name: "Pooja", age: 26, department: "HR", salary: 52000, city: "Pune", experience: 3 },
  { id: 11, name: "Arjun", age: 23, department: "IT", salary: 47000, city: "Nagpur", experience: 1 },
  { id: 12, name: "Meera", age: 34, department: "Marketing", salary: 82000, city: "Mumbai", experience: 9 },
  { id: 13, name: "Sahil", age: 32, department: "Finance", salary: 78000, city: "Pune", experience: 8 },
  { id: 14, name: "Nisha", age: 21, department: "Sales", salary: 42000, city: "Jaipur", experience: 0 },
  { id: 15, name: "Deepak", age: 29, department: "IT", salary: 68000, city: "Bangalore", experience: 5 },
  { id: 16, name: "Komal", age: 27, department: "HR", salary: 56000, city: "Chennai", experience: 4 },
  { id: 17, name: "Yash", age: 33, department: "Marketing", salary: 85000, city: "Hyderabad", experience: 9 },
  { id: 18, name: "Tanvi", age: 24, department: "Finance", salary: 51000, city: "Nagpur", experience: 2 },
  { id: 19, name: "Harsh", age: 36, department: "IT", salary: 98000, city: "Delhi", experience: 12 },
  { id: 20, name: "Riya", age: 28, department: "Sales", salary: 61000, city: "Mumbai", experience: 5 }
];

const experienced_emp = employees.filter((employees)=>employees.experience>5);

//console.log(experienced_emp);
const emp_name= employees.map((employees)=>employees.name);

//console.log(emp_name);

const emp_obj = employees.map((employees)=>({
    name:employees.name,
    department:employees.department
}));

//console.log(emp_obj);

const increase_Sal = employees.map((employees)=>({
    ...employees,
    salary:employees.salary*1.1
}));

console.log(increase_Sal);

