import React from 'react'

const UserCard = ({user, deleteUser, setUserUpdate}) => {
  return (
    <article>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
          <li><b>Correo: </b>{user.email}</li>
          <li><b>Birthday: </b>{user.birthday}</li>
        </ul>
        <button onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
        <button onClick={() => setUserUpdate(user)}><i className='bx bx-edit'></i></button>
    </article>
  )
}

export default UserCard