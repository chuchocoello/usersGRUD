import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormUsers = ({ createUser, userUpdate, updateUser }) => {

    const { handleSubmit, register, reset } = useForm()
    const defaultValues = {email: "", password: "", first_name: "", last_name: "", birthday:""}

    const submintForm = (data) => {
        if(userUpdate){
            updateUser(userUpdate.id, data)
        } else {
            createUser(data)
        }
        reset(defaultValues)
    }

    useEffect(() => {
        if(userUpdate){
        reset(userUpdate)
    }
    }, [userUpdate])

    return (
        <form onSubmit={handleSubmit(submintForm)}>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" {...register("email")} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" {...register("password")} />
            </div>
            <div>
                <label htmlFor="">First Name</label>
                <input type="text" {...register("first_name")} />
            </div>
            <div>
                <label htmlFor="">Last Name</label>
                <input type="text" {...register("last_name")} />
            </div>
            <div>
                <label htmlFor="">Birthday</label>
                <input type="date" {...register("birthday")} />
            </div>
            <button>{ userUpdate ? "Update User" : "Add User"}</button>
        </form>

    )
}

export default FormUsers