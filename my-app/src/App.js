import logo from './logo.svg';
import './App.css';

var logedIn = true;

export default function App() {
  if(logedIn == true) {
    return LogedIn();
  }
  else {
    return NotLogedIn();
  }
}

function NotLogedIn(){
  return(
    <>
    U are not loged in, unfortunetly
    </>
  );
}

function LogedIn(){
  const user1 = new User ("John Doe", 25, "john@example.com");
  return (
    <>
      <h1>Hello chiki briki</h1>
      <p>User: user1</p>
      <p>Name: {user1.name}</p>
      <p>Age: {user1.age}</p>
      <p>User: {user1.email}</p>
      <img className="User" 
      src={user1.photoUrl}
      alt={'Photo of ' + user1.name}
      style={{
        width: 90,
        height: 90
      }} 
      />
    </>
  );
}

class User {
  constructor(name, age, email,photoUrl) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.photoUrl = 'https://i.imgur.com/UkgrtOf.jpeg';
  }
}

