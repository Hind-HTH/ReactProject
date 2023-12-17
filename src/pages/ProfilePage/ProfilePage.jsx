import React from 'react'
import styles from './ProfilePage.module.css'
import { useContext } from 'react'
import { AuthContext } from '../../context'
export default function ProfilePage() {
  const { user } = useContext(AuthContext)
  return (
    <div className={`${styles.cardDetail} flex justify-center items-center`}>
      <div>
        <h1 className='mb-30'>Mon profile</h1>
        <p>Email: {user?.email}</p>
        <p>Password: *********</p>
      </div>
    </div>
  )
}
