import { Routes, Route, Link, useHistory } from 'react-router-dom';
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
      <label>Username</label>
    </div>
    <div className={styles['user-box']}>
      <input type="password" name="" required=""/>
      <label>Password</label></div>
      <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
    
        {/* <h3 className={styles.title}>Username:     </h3>  <input type="text"  className={styles.inputText}></input>
        <br></br>
        <h3 className={styles.title}>Password:     </h3>  <input type="password"  className={styles.inputText}></input> */}
        <br></br>
        <a href="/news" style={{textDecoration: "none"}}><b><p><i style={{color: "#e9ebee"}}>Forgotten password?</i></p></b></a>
        <br></br><button className={styles.buttonlog}>Submit</button>
        {/* <Link to="/signup" className={styles.buttonlog}>Submit</Link> */}
        <p className={styles.content}>Not a membership? <a href="/signup" className={styles.content1}>Sign up</a></p>
     

        <Routes>
        <Route path="/signup" element={<Signup />} />
         </Routes>
        </div></div>
    )
}
export default Login