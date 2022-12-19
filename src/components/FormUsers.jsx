import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormUsers = ({ createUser, userUpdate, updateUser, isShow, handleChalengeShowModal, setUserUpdate }) => {

    const { handleSubmit, register, reset } = useForm()
    const defaultValues = { email: "", password: "", first_name: "", last_name: "", birthday: "" }

    const submintForm = (data) => {
        if (userUpdate) {
            updateUser(userUpdate.id, data)
        } else {
            createUser(data)
        }
        reset(defaultValues)
    }

    const xButton = () => {
    setUserUpdate()
    handleChalengeShowModal()
    }

    useEffect(() => {
        if (userUpdate) {
            reset(userUpdate)
        }
    }, [userUpdate])

    return (
        <div className={ isShow ? "container-form" : "disable-form"}>
            <form className='form' onSubmit={handleSubmit(submintForm)}>
                <i onClick={xButton} className='form__x bx bx-x'></i>
                <h2 className="form__title">{userUpdate ? `Update ${userUpdate?.first_name}` : "Create a new user"}</h2>
                <div className='form__div' >
                    <label className='form__label' htmlFor="">Email</label>
                    <input placeholder='Enter your e-mail' className='form__input' type="email" {...register("email")} />
                </div>
                <div className='form__div' >
                    <label className='form__label' htmlFor="">Password</label>
                    <input placeholder='Enter your password' className='form__input' type="password" {...register("password")} />
                </div>
                <div className='form__div' >
                    <label className='form__label' htmlFor="">First Name</label>
                    <input placeholder='Enter your first name' className='form__input' type="text" {...register("first_name")} />
                </div>
                <div className='form__div' >
                    <label className='form__label' htmlFor="">Last Name</label>
                    <input placeholder='Enter your last name' className='form__input' type="text" {...register("last_name")} />
                </div>
                <div className='form__div' >
                    <label className='form__label' htmlFor="">Birthday</label>
                    <input className='form__input' type="date" {...register("birthday")} />
                </div>
                <button className='form__btn' onClick={handleChalengeShowModal}>{userUpdate ? "Update User" : "Add User"}</button>
            </form>
        </div>

    )
}

export default FormUsers