import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';



function App() {
  const [profiles, setProfiles] = useState([
    {
      firstName: 'Jessica',
      lastName: 'Swenson',
    },
    {
      firstName: 'Scott',
      lastName: 'Sutherland',
    },
    {
      firstName: 'Joely',
      lastName: 'Vernier',
    }
  ])

  const profileDisplay = profiles.map((profileObj) => {
    console.log();
    return <Profile info={profileObj} />
  })

  return (
    <div className="App">
      {profileDisplay}
    </div>
  );
}

export default App;
