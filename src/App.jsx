import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const originalUrl = "https://users-crud.academlo.tech/"

function App() {
  const [users, setUsers] = useState()

  const getAllUsers = () => {
    const url = `${originalUrl}users/`
    axios.get(url)
        .then(res =>setUsers(res.data))
        .catch(err => console.log(err))
  }

  const createUser = (data) => {
    const url = `${originalUrl}users/`
    axios.post(url, data)
        .then(res => {
          console.log(res.data)
          getAllUsers()
        })
        .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <FormUsers createUser={createUser}/>
      {
        users?.map(user => (
        <UserCard key={user.id} user={user}/>
        ))
      }
    </div>
  )
}

export default App
