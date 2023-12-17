import React, { useContext, useState } from 'react'
import styles from './LoginForm.module.css'
// import { login } from '../../services/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';

export default function LoginForm({ setAction }) {
  const initData = {
    email: '',
    password: ''
  }

  const [userData, setUserData] = useState(initData);
  const navigation = useNavigate();
  const { login, loginError, user } = useContext(AuthContext)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userData);
    setUserData(initData);
  }

  return (
    <>
      {
        user
          ? <Navigate to='profile' />
          : <div className='flex flex-1 justity-center items-center' >
            <form className={`${styles.form} ${styles.card}`} onSubmit={handleSubmit}>
              <h1 className='my-5'>Connexion</h1>
              <div className='flex flex-col mb-10'>
                <label className='label-form' htmlFor="email">Email</label>
                <input
                  value={userData.email}
                  type="email"
                  name="email"
                  placeholder="Your email"
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col mb-10'>
                <label className='label-form' htmlFor="password">Password</label>
                <input
                  value={userData.password}
                  type="password"
                  name="password"
                  placeholder="Your password"
                  onChange={handleChange}
                />
                {loginError && <span className='text-danger mx-5'>{loginError}</span>}
              </div>
              <div className='flex my-10 '>
                <span className='flex-1'>Pas encore de compte </span>
                <span onClick={() => setAction('register')} className='pointer'>Creer un compte</span>
              </div>
              <button className={styles.btn} type="submit">Se connecter</button>
            </form>
          </div >
      }
    </>

  )
}
