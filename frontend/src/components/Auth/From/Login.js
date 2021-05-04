import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../../context/user/userContext'
function Login({ setValueModal }) {
  const history = useHistory()
  const { loginUser } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (formData) => {
    const { username, password } = formData
    const loginStatus = await loginUser(username, password).then((message) => {
      console.log('mesagge', message)
      if (!message === 200) {
        console.log(loginStatus)
        return message
      }
      history.push('/notes')
      setValueModal(false)
      return message
    })
  }
  return (
    <>
      <h1 className='text-center'>Login</h1>
      <form className='d-flex flex-column mt-04' onSubmit={onSubmit}>
        {errors.user && <div>{errors.user.message}</div>}
        <input type='text' placeholder='User Name' name='userName' {...register('username', { required: 'You must specify a user name' })} />
        {errors.password && <div>{errors.password.message}</div>}
        <input
          className='mt-04'
          type='password'
          name='password'
          placeholder='Password'
          {...register('password', { required: 'You must specify a password' })}
        />

        <div className='mt-04 text-center'>
          <input value='Sign in' type='submit' onClick={handleSubmit(onSubmit)} />
        </div>
      </form>
    </>
  )
}
export { Login }
