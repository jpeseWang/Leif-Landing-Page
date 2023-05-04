import styles from "./about.module.css";

function About(){
    document.title = "Cosmos E-learning | About Us";
    return(
        <div>

        
        <h1>About page</h1>
        <br></br>
        <section className={styles.main}>
        
        <div className={styles.homeContent}>
            <h1>Hi, I'm Leif</h1>
            <h3>Frontend Developer</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p><br></br>
            <div className={styles.btnBox}>
                <a href="">Hire Me</a>
                <a href="https://www.linkedin.com/in/jpesewangwork/">Let's talk</a>
            </div>
        </div>


     </section>
        </div>
    )
}
export default About