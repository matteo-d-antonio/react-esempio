import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    /*fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => setUsers(response))ciao*/
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
  }, []);

  function addUser() {
    /*fetch('https://jsonplaceholder.typicode.com/users', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ name: `user ${Math.random()}` })
    })
      .then(response => response.json())
      .then(response => setUsers(s => [...s, response]))*/
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: `user ${Math.random()}`
    })
      .then(response => setUsers(s => [...s, response.data]))
  }

  return (
    <>
      <button className="bg-red-500" onClick={addUser}>Aggiungi</button>
      {
        users.map(user => {
          return <li key={user.id}> {user.name}</li>
        
        })
      }
    </>
  )
}

export default App
