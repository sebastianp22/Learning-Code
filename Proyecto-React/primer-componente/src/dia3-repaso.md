// 1. Estado con objeto user (name, email, age)
R:

const [user, setUser] = useState({name:'', email:'', age:0});


// 2. Función que actualiza solo el email
R: 
const updateEmail = (newEmail) =>{
  setUser({
    ...user,
    email: newEmail
  });
};

// 3. Función que actualiza solo la edad
R:

const updateAge = (newAge) =>{
  setAge({
    ...age,
    age: newAge
  });
};
