import { Routes, Route, Link } from 'react-router-dom';
import Signup from './signup';
import styles from './login.module.css';

function Login(){
    document.title = "Cosmos E-learning | Login";

    return(
        <div> 
        <br></br>
        <div className={styles['login-box']}>
        <h1 className={styles.title1}>Login</h1>
        <div className={styles['user-box']}>
      <input type="text" name="" required=""/>
      
      <label><i class="fa-solid fa-user"></i> Username</label>
    </div>
    <div className={styles['user-box']}>
      <input type="password" name="" required=""/>
      <label><i class="fa-solid fa-lock"></i> Password</label></div>
      <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
    
      
        <br></br>
        <a href="/news" style={{textDecoration: "none"}}><b><p><i style={{color: "#e9ebee"}}>Forgotten password?</i></p></b></a>
        <br></br>
        <button className={styles.buttonlog}>Submit</button>
        <p className={styles.content}>Not a membership? <Link to="/signup" className={styles.content1}>Sign up</Link></p>
        
     
        <Routes>
        <Route path="/signup" element={<Signup />} />
        </Routes>
        </div></div>
    )
}
export default Login