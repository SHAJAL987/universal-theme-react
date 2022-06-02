
const KEYS = {
    employees:'employees',
    employeeId:'employeeId'
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

export const booldGroup=() =>(
    [
        {label:'A (+ve)',id:1},
        {label:'A (-ve)',id:2},
        {label:'B (+ve)',id:3},
        {label:'B (-ve)',id:4},
        {label:'AB (+ve)',id:5},
        {label:'AB (-ve)',id:6},
        {label:'O (+ve)',id:7},
        {label:'O (-ve)',id:8},
    ]
)

export function insertEmployee(data){
    let employees = getAllEmployees();
    data['id'] = generateEmployeeId();
    employees.push(data);
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId(){
    if(localStorage.getItem(KEYS.employeeId) == null){
        localStorage.setItem(KEYS.employeeId, '0')
    }
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId,(++id).toString())
    return id;
}

export function getAllEmployees(){
    if(localStorage.getItem(KEYS.employees) == null){
        localStorage.setItem(KEYS.employees,JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(KEYS.employees));
}