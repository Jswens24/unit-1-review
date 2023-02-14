import './App.css';
import Profile from './components/Profile';


function App() {

  const user = {
    firstName: 'Jessica',
    lastName: 'Swenson',
    favoriteColor: 'Purple'
  }

  const userTwo = {
    firstName: 'Scott',
    lastName: 'Sutherland',
    favoriteColor: 'Blue'
  }


  return (
    <div className="App">
      <Profile info={user} isMe={true} />
      <Profile info={userTwo} isMe={false} />
    </div>
  );
}

export default App;
