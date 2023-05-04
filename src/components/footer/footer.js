import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./footer.module.css"
function Footer(){
    return(
        <div className={styles.footerBase}>
        <div className={`${styles.list} ${styles.container}`}>
            <div className={styles.companyData}>
                <h1 className={`${styles.logo} ${styles.title}`}>Cosmos E-learning</h1>
                <p className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure. 
               </p>
                <ul className={styles.content}>
                    <li className="list-item"><a href="#"></a></li>
                    <li className="list-item"><a href="#"></a></li>
                    <li className="list-item"><a href="#"></a></li>
                    <li className="list-item"><a href="#"></a></li>
                </ul>
                <br></br>
                <span>&copy; 2023 Cosmos E-learning. All rights reserved.</span>

            </div>
            <div className={styles.grid2}>
            <h6 className={styles.title}>CATEGORIES</h6>
            <ul className={styles.content}>
                    <li className="list-item"><a href="#">Courses</a></li>
                    <li className="list-item"><a href="#">Support</a></li>
                    <li className="list-item"><a href="#">Privacy</a></li>
                    <li className="list-item"><a href="#">Contact</a></li>
                </ul>
        </div>
        <div className={styles.grid3}>
            <h6 className={styles.title}>PRODUCTS</h6>
            <ul className={styles.content}>
                    <li className="list-item"><a href="#">Code with me</a></li>
                    <li className="list-item"><a href="#">Creative Widget</a></li>
                    <li className="list-item"><a href="#">Sneakerpedia</a></li>
                    <li className="list-item"><a href="#">Cosmos E-learning</a></li>
                </ul>
        </div>
        <div className={styles.grid3}>
            <h6 className={styles.title}>CONTACT</h6>
            <ul className={styles.content}>
                    <li className="list-item"><i class="fa-solid fa-file-signature"></i><a href="#"> Le Nhat Quang (Leif)</a></li>
                    <li className="list-item"><i class="fa-solid fa-phone"></i><a href="#"> +84 393983339</a></li>
                    <li className="list-item"><i class="fa-solid fa-envelope"></i><a href="#"> jpesewangwork@gmail.com</a></li>
                    <li className="list-item"><i class="fa-sharp fa-solid fa-location-dot"></i><a href="#"> Da Nang, Viet Nam</a></li>
                </ul>
        </div>
        
        </div>
        <br></br>
        <h3 className={styles.submit}>Subcribe our last news!</h3>
        <form action="#" className={styles.footer1}>
            <i class="fa-solid fa-paper-plane-top"></i>
            <input type="email"
             placeholder="Enter your email"></input>
             <input type="submit" ></input>
             
        </form>
        </div>
    )
}

export default Footer