import {Routes, Route, Link}  from 'react-router-dom'
import clsx from 'clsx'
import Home from '../homepage/home'
import About from '../aboutUs/about'
import News from '../news/news'
import Login from '../log/login/login'
import styles from './navBar.module.css'
function Navigation(){
  const navClassNames = clsx(styles.navbar);

    return(
      <div>
      <header  className={styles.header}>
        <a href="/" className={styles.logo}>Leif.</a>
         <nav>
         
         <Link to="/" className={styles['nav-link']}>Home</Link>
        <Link to="/about" className={styles['nav-link']}>About</Link>
        <Link to="/news" className={styles['nav-link']}>News</Link>
        <Link to="/login" className={styles['nav-link']}>Login</Link>
       </nav></header>
       <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />

      </Routes>
      </div>
        </div>


    )
}
export default Navigation