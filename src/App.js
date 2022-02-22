import { useState } from 'react';
import './App.css';
import contacts from './contacts.json'


function App() {
  const [ contactsList, setContact] = useState(contacts.splice(0, 5))

  const newContact =()=>{
  
    const newElement = contacts.splice(Math.random() * contacts.length ,1);
  
    const arr = [...contactsList]
    arr.push(...newElement)
    setContact(arr)
  }

  return (
    <main>
      <h1>Iron contacts</h1>
      <button onClick={() => newContact()}>Add Random Contact</button>
      <table>
        <thead>

          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
          <tbody>
        {
          contactsList.map(contact => {
            return (

            <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt="famous photo"></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy ? <td>🏆</td> : <td></td>}
            </tr>
          )

          })
        }
        </tbody>
      </table>
    </main>
  )
}

export default App;
