'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type SignInForm = {
  email: string
  password: string
}

const SignInScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignInForm>()

  const [show, setShow] = React.useState(false)

  const handleOnSubmit: SubmitHandler<SignInForm> = (data: SignInForm) => {
    console.log(data)
  }
  return (
    <div className='w-full h-full flex justify-center'>
      <div className='container lg:w-1/4 md:2/3 h-1/3 bg-primary-100 mt-16 p-8 rounded-lg md:mx-8'>
        <form
          method='post'
          onSubmit={(event) => {
            void handleSubmit(handleOnSubmit)(event)
          }}
          className='flex flex-col space-y-10'
        >
          <label className='flex flex-col space-y-1'>
            <div className='text-sm font-bold mb-1'>メールアドレス</div>
            <input
              type='text'
              {...register('email', {
                required: '必須項目です',
                maxLength: {
                  value: 50,
                  message: '50文字以内で入力してください',
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'メールアドレスの形式が違います',
                },
              })}
              className='text-gray-800 mt-4 rounded-md border py-2 px-3'
              placeholder='例）mail@example.com'
            />
            {errors.email && (
              <div className='text-red-500 pl-1 pt-1 text-xs'>
                {errors.email.message}
              </div>
            )}
          </label>
          <label className='flex flex-col space-y-1'>
            <div className='text-sm font-bold mb-1'>パスワード</div>
            <input
              type={show ? 'text' : 'password'}
              {...register('password', {
                required: '必須項目です',
                minLength: {
                  value: 8,
                  message: '8文字以上で入力してください',
                },
                maxLength: {
                  value: 50,
                  message: '50文字以内で入力してください',
                },
              })}
              className='text-gray-800 mt-4 rounded-md border py-2 px-3'
            />
            {errors.password && (
              <div className='text-red-500 pl-1 pt-1 text-xs'>
                {errors.password.message}
              </div>
            )}
          </label>
          <button
            type='submit'
            disabled={!isValid || isSubmitting}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Button
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignInScreen
