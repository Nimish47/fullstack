type Formdata = {
  name: string;
  age: number;
  email: string;
  password: string;
};

type ValidationResult =
  | { status: "success"; data: Formdata }
  | { status: "error"; errors: string[] };

function validate(data: Formdata): ValidationResult {

  const errors: string[] = [];

  if (!data.name.trim()) errors.push("Name cannot be empty");
  if (data.age < 18) errors.push("Age must be 18 or above");
  if (!data.email.includes("@")) errors.push("Invalid email");
  if (data.password.length < 8)errors.push("Password must be at least 8 characters");

  if (errors.length > 0)return { status: "error", errors };

  return { status: "success", data };
}


// mock form input
const goodData = {name: 'Karan', email: 'abc@gma', age: 23, password: '12345667'} 
const badData = {name: ' ', email: 'abcgma', age: 13, password: '12367'} 

const result = validate(goodData);

if (result.status === "success") {
  console.log(result.data);
} else {
  console.log(result.errors);
}