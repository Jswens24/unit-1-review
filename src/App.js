import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';



function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
  ]);

  const addNewProfile = (e) => {
    e.preventDefault()
    const newProfile = {
      firstName,
      lastName
    }

    setProfiles([...profiles, newProfile])
    setFirstName('');
    setLastName('');
  }

  const profileDisplay = profiles.map((profileObj) => {
    return <Profile info={profileObj} />
  })

  return (
    <div className="App">
      {profileDisplay}

      <form onSubmit={addNewProfile}>
        <input placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)} />
        <button>Add Profile</button>
      </form>
    </div>
  );
}

export default App;
