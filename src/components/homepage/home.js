
import React from 'react';
import styles from './home.module.css';

function Home(){
    document.title = "Cosmos E-learning | Home";
    return(
        
        <div className={styles.home}>
            <section className={styles['home-content']}>
        <h1>Hi! I'm Leif</h1>
        <h3>Frontend Developer</h3>
        <p>The href attribute requires a valid value to be accessible. 
            <br></br>
            Provide a valid, navigable address as the href value.  </p>

      

        </section>
        </div>
    )
}
export default Home