import React from 'react'

const UserCard = ({user, deleteUser, setUserUpdate, handleChalengeShowModal}) => {

  const handleChalengeClickUpdate = () => {
    setUserUpdate(user)
    setTimeout(() => {
      handleChalengeShowModal()
    }, 20);
  }

  return (
    <article className='user'>
        <h2 className='user__title'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user__list'>
          <li className='user__item'><b>Correo: </b>{user.email}</li>
          <li className='user__item'><b>Birthday: </b>{user.birthday}</li>
        </ul>
        <div className="user__container-btn">
        <button className='user__btn' onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
        <button className='user__btn' onClick={() => handleChalengeClickUpdate()}><i className='bx bx-edit'></i></button>
        </div>
    </article>
  )
}

export default UserCard