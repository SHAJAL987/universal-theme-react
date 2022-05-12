const KEYS = {
    employees:'employees'
}

export const getDepartmentCollection = () => ([
    {id:'1', title:'Intern'},
    {id:'2', title:'Trainee Soft. Engineer'},
    {id:'3', title:'Assistent Soft. Engineer'},
    {id:'4', title:'Junior Soft. Engineer'},
    {id:'5', title:'Software Engineer'}
])

export const genderItems= () => ([
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "others", title: "Others" },
  ]);

export function insertEmployee(data){
    let employees = getAllEmployees();
    employees.push(data);
    localStorage.setItem(KEYS.employees.JSON.stringify());
}

export function getAllEmployees(){
    if(localStorage.getItem(KEYS.employees) == null){
        localStorage.setItem(KEYS.employees.JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(KEYS.employees));
}