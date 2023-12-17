import React, { useState } from 'react'
import styles from './RegisterForm.module.css'
import { register } from '../../services/auth';

export default function RegisterForm({ setAction }) {
  const initData = {
    email: '',
    password: '',
    cgu: false
  }

  const [userData, setUserData] = useState(initData);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await register(userData);
        setUserData(initData);
        setAction('login');
      } catch (e) {
        setError(e.message)
      }
    }
  }

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation de l'e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      newErrors.email = 'Adresse e-mail invalide';
      isValid = false;
    }

    // Validation du mot de passe
    if (userData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
      isValid = false;
    }

    if (userData.cgu === false) {
      newErrors.cgu = "Merci d'accepter les conditions d'utilisation";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  return (
    <div className='flex flex-1 justity-center items-center' >
      <form className={`${styles.form} ${styles.card}`} onSubmit={handleSubmit}>
        <h1 className='my-5'>Inscription</h1>
        <div className='flex flex-col mb-10'>
          <label className='label-form' htmlFor="email">Email</label>
          <input
            value={userData.email}
            type="email"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
          />
          {errors.email && <span className='text-danger mx-5'>{errors.email}</span>}
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
          {errors.password && <span className='text-danger mx-5'>{errors.password}</span>}
        </div>
        <div className='mb-10'>
          <input
            checked={userData.cgu}
            type="checkbox"
            name="cgu"
            onChange={handleChange}
          />
          <label className='label-form' htmlFor="Conditions">Accepter les conditions</label>
          {errors.cgu && <span className='flex text-danger mx-5'>{errors.cgu}</span>}
        </div>
        {error && <span className='text-danger mx-5'>{error}</span>}
        <div className='flex my-10 mx-5'>
          <span className='flex-1'>Déjà un compte </span>
          <span onClick={() => setAction('login')} className='pointer' >Se connecter</span>
        </div>
        <button className={styles.btn} type="submit">Creer un compte</button>
      </form>
    </div >
  )
}
