
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (

      <div className="App">
      <PersonCard fname="Doe, " lname=" Jone" age={45} hcolor="Black" />
      <PersonCard fname="Smith, " lname="John" age={88} hcolor="Brown" />
      <PersonCard fname="Fillmore, "lname="Millard" age={55} hcolor="Brown" />
      <PersonCard fname="Smith, "lname="Maria" age={62} hcolor="Brown" />
    </div>

  );
}

export default App;
