import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { queryGraphql } from '../../../api/QueryGraphql'

function Registration() {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [message, setMessage] = useState('')
  const onSubmit = async (formData) => {
    const { username, password } = formData
    console.log(username, password)
    const { message } = await queryGraphql.registrationQgl(username, password).then((res) => res.data.registrationUser)
    setMessage(message)
  }

  return (
    <>
      <h1 className='text-center'>Registration</h1>
      <form className='d-flex flex-column mt-04' onSubmit={onSubmit}>
        {errors.user && <div>{errors.user.message}</div>}
        <input type='text' placeholder='User Name' name='userName' {...register('username', { required: 'You must specify a user name' })} />
        {errors.password && (
          <div className='mx-auto' style={{ width: '217px' }}>
            {errors.password.message}
          </div>
        )}
        <input
          className='mt-04'
          type='password'
          placeholder='Password'
          name='password'
          {...register('password', {
            required: 'You must specify a password',
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
          })}
        />
        {getValues('password') ? errors.password_repeat && <div>{errors.password_repeat.message}</div> : null}

        <input
          className='mt-04'
          type='password'
          placeholder='Repeat password'
          name='password_repeat'
          {...register('password_repeat', {
            validate: (value) => value === getValues('password') || 'The passwords do not match',
          })}
        />
        <div style={{ width: '217px' }} className={'mt-04 reg-message'}>
          {message}
        </div>
        <div className='mt-04 text-center'>
          <input value='Sign up' type='submit' onClick={handleSubmit(onSubmit)} />
        </div>
      </form>
    </>
  )
}
export { Registration }
