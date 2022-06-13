const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const getDepartmentCollection = () => [
  { id: "1", title: "Intern" },
  { id: "2", title: "Trainee Soft. Engineer" },
  { id: "3", title: "Assistent Soft. Engineer" },
  { id: "4", title: "Junior Soft. Engineer" },
  { id: "5", title: "Software Engineer" },
];

export const genderItems = () => [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "others", title: "Others" },
];

export const booldGroup = () => [
  { label: "A (+ve)", id: 1 },
  { label: "A (-ve)", id: 2 },
  { label: "B (+ve)", id: 3 },
  { label: "B (-ve)", id: 4 },
  { label: "AB (+ve)", id: 5 },
  { label: "AB (-ve)", id: 6 },
  { label: "O (+ve)", id: 7 },
  { label: "O (-ve)", id: 8 },
];
export const top100Films = () => [
  { label: "The Shawshank Redemption", id: 1994 },
  { label: "The Godfather", id: 1972 },
  { label: "The Godfather: Part II", id: 1974 },
  { label: "The Dark Knight", id: 2008 },
  { label: "12 Angry Men", id: 1957 },
  { label: "Schindler's List", id: 1993 },
  { label: "Pulp Fiction", id: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    id: 2003,
  },
  { label: "The Good, the Bad and the Ugly", id: 1966 },
  { title: "Fight Club", id: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    id: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    id: 1980,
  },
  { label: "Forrest Gump", id: 1994 },
  { label: "Inception", id: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    id: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", id: 1975 },
  { label: "Goodfellas", id: 1990 },
  { label: "The Matrix", id: 1999 },
  { label: "Seven Samurai", id: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    id: 1977,
  },
  { label: "City of God", id: 2002 },
  { label: "Se7en", id: 1995 },
  { label: "The Silence of the Lambs", id: 1991 },
  { label: "It's a Wonderful Life", id: 1946 },
  { label: "Life Is Beautiful", id: 1997 },
  { label: "The Usual Suspects", id: 1995 },
  { label: "Léon: The Professional", id: 1994 },
  { label: "Spirited Away", id: 2001 },
  { label: "Saving Private Ryan", id: 1998 },
  { label: "Once Upon a Time in the West", id: 1968 },
  { label: "American History X", id: 1998 },
  { label: "Interstellar", id: 2014 },
  { label: "Casablanca", id: 1942 },
  { label: "City Lights", id: 1931 },
  { label: "Psycho", id: 1960 },
  { label: "The Green Mile", id: 1999 },
  { label: "The Intouchables", id: 2011 },
  { label: "Modern Times", id: 1936 },
  { label: "Raiders of the Lost Ark", id: 1981 },
  { label: "Rear Window", id: 1954 },
  { label: "The Pianist", id: 2002 },
  { label: "The Departed", id: 2006 },
  { label: "Terminator 2: Judgment Day", id: 1991 },
  { label: "Back to the Future", id: 1985 },
  { label: "Whiplash", id: 2014 },
  { label: "Gladiator", id: 2000 },
  { label: "Memento", id: 2000 },
  { label: "The Prestige", id: 2006 },
  { label: "The Lion King", id: 1994 },
  { label: "Apocalypse Now", id: 1979 },
  { label: "Alien", id: 1979 },
  { title: "Sunset Boulevard", id: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    id: 1964,
  },
  { label: "The Great Dictator", id: 1940 },
  { label: "Cinema Paradiso", id: 1988 },
  { label: "The Lives of Others", id: 2006 },
  { label: "Grave of the Fireflies", id: 1988 },
  { label: "Paths of Glory", id: 1957 },
  { label: "Django Unchained", id: 2012 },
  { label: "The Shining", id: 1980 },
  { label: "WALL·E", id: 2008 },
  { label: "American Beauty", id: 1999 },
  { label: "The Dark Knight Rises", id: 2012 },
  { label: "Princess Mononoke", id: 1997 },
  { label: "Aliens", id: 1986 },
  { label: "Oldboy", id: 2003 },
  { label: "Once Upon a Time in America", id: 1984 },
];

export function insertEmployee(data) {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null) {
    localStorage.setItem(KEYS.employeeId, "0");
  }
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllEmployees() {
  const data = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("employees")) : null;
  return data;
  // if (localStorage.getItem(KEYS.employees) == null) {
  //   localStorage.setItem(KEYS.employees, JSON.stringify([]));
  // }
  // return JSON.parse(localStorage.getItem(KEYS.employees));
}
