import React, { useState } from 'react'
import styles from './HomePage.module.css'
import { register, login } from '../../services/auth';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function HomePage() {
  const [action, setAction] = useState('login')

  return (

    <div className='flex flex-1 justity-center items-center' >
      {
        action === 'register' ? <RegisterForm setAction={setAction} /> : <LoginForm setAction={setAction} />
      }
    </div >

  )
}
