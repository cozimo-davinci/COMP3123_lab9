import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import ReactJS from './components/ReactJS';
import Student from './components/Student';
import College from './components/College';

function App() {
  return (
    <div className="App">

      <img src={logo} className="App-logo" alt="logo" />

      <Welcome />
      <ReactJS />
      <Student studentID="101412670" fname="Teimur" lname="Terchyyev" />
      <College />
    </div>
  );
}

export default App;
