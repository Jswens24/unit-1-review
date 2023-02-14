import './App.css';
import Profile from './components/Profile';


function App() {

  const user = {
    firstName: 'Jessica',
    lastName: 'Swenson',
  }

  const userTwo = {
    firstName: 'Scott',
    lastName: 'Sutherland',
  }


  return (
    <div className="App">
      <Profile info={user} />
      <Profile info={userTwo} />
    </div>
  );
}

export default App;
