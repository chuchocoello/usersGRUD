import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const originalUrl = "https://users-crud.academlo.tech/"

function App() {
  const [users, setUsers] = useState()
  const [userUpdate, setUserUpdate] = useState()
  const [isShow, setIsShow] = useState(false)

  const handleChalengeShowModal = () => {
    setIsShow(!isShow)
  }

  const getAllUsers = () => {
    const url = `${originalUrl}users/`
    axios.get(url)
      .then(res => setUsers(res.data))
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
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const url = `${originalUrl}users/${id}/`
    axios.patch(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUserUpdate()
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const addButton = () => {
    handleChalengeShowModal()
    setUserUpdate()
  }

  return (
    <div className="App">
      <div className="header-container">
        <h1 className='header__title'>CRUD Users</h1>
        <button onClick={addButton} className="header__btn"><i className='bx bx-plus'></i> Add a new user</button>
      </div>
      <FormUsers createUser={createUser}
        userUpdate={userUpdate}
        updateUser={updateUser}
        isShow={isShow}
        handleChalengeShowModal={handleChalengeShowModal}
        setUserUpdate={setUserUpdate}
        />
      <div className='users-container'>
        {
          users?.map(user => (
            <UserCard key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              handleChalengeShowModal={handleChalengeShowModal} />
          ))
        }
      </div>
    </div>
  )
}

export default App
