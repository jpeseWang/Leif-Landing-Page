import {Routes, Route, Link, useHistory}  from 'react-router-dom'
import Signup from './signup';
import styles from './login.module.css';

function Login(){
    document.title = "Cosmos E-learning | Login";
   

    return(
        <div> 
        <br></br>
        <div className={styles['login-box']}>
        <h1 className={styles.title1}>Login</h1>
        <form>
            <div className={styles['user-box']}>
                <input type="text" name="" required=""/>
                <label>Username</label>
            </div>
            <div className={styles['user-box']}>
                <input type="password" name="" required=""/>
                <label>Password</label>
            </div>
            <button type="submit" className={styles.buttonlog}>Submit</button>
        </form>
        <p className={styles.content}>Not a member? <Link to="/signup" className={styles.content1}>Sign up</Link></p>
        <Routes>
            <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
        </div>
    )
}
export default Login;
