import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from './login';


import styles from './login.module.css';

function Signup(){
    document.title = "Cosmos E-learning | Sign up";
    return(
        <div> 
        <br></br>
        <div className={styles['login-box']}>
        <h1 className={styles.title1}>Sign up</h1>
        <h3>Hello, welcome to our website!</h3>
       
        <div className={styles['user-box']}>
            <input type="text" name="" required="" placeholder="  "/>
                <label className={styles['form-label']}><i class="fa-solid fa-user"></i> Full name</label>
        </div>
        <div className={styles['user-box']}>
            <input type="text" name="" required="" placeholder="  "/>
                <label className={styles['form-label']}><i class="fa-solid fa-user"></i> Username</label>
         </div>
    
    <div className={styles['user-box']}>
      <input type="password" name="" required="" placeholder="  "/>
      <label className={styles['form-label']}><i class="fa-solid fa-lock"></i> Password</label></div>
      
    
        <br></br>
     
        <input type="checkbox" className={styles.term}/>
        <p className={styles.term}><i style={{color: "#e9ebee"}}>I agree to terms and conditions</i></p>
        <br></br><button className={styles.buttonlog}>Create account</button>
        
        
        <p className={styles.content}>Already have an account?  <Link to="/login" className={styles.content1}>Sign in</Link></p>

        <Routes>
        <Route path="/login" element={<Login />} />
         </Routes>
        </div></div>
    )
}
export default Signup