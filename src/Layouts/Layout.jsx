import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './Layout.module.css';
import AuthProvider from '../components/AuthProvider/AuthProvider';

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <div className={styles.container}>
        <Header />
        <main className={styles.mainContent}>
          {children}
        </main>
        <Footer />
      </div>
    </AuthProvider>

  );
};

export default Layout;
