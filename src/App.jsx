import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const originalUrl = "https://users-crud.academlo.tech/"

function App() {
  const [users, setUsers] = useState()
  const [userUpdate, setUserUpdate] = useState()

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

  const deleteUser = (id) => {
    const url = `${originalUrl}users/${id}/`
    axios.delete(url)
        .then(res => {console.log(res.data)
        getAllUsers()
        })
        .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const url = `${originalUrl}users/${id}/`
    axios.patch(url, data)
        .then(res => {console.log(res.data)
        getAllUsers()
        setUserUpdate()
        })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <FormUsers createUser={createUser}
                 userUpdate={userUpdate}
                 updateUser={updateUser}/>
      {
        users?.map(user => (
        <UserCard key={user.id}
        user={user}
        deleteUser={deleteUser}
        setUserUpdate={setUserUpdate}/>
        ))
      }
    </div>
  )
}

export default App
