import styles from "./home.module.css";
import { Button, Typography } from "@mui/material";
import sideImage from "../Asseets/startup.svg"
const Home = () => {
  return (
    <>

    <section className={styles.homeContainer}>
    <div className={styles.intro}>
        <h2>Hi, I'm</h2>
        <h1>Nitesh Singh</h1>
        <h3>I am a Full stack developer</h3>
        {/* <Typography>I work on JavaScript.</Typography> */}

<div style={{marginTop:10}}> 
<Button variant="outlined" className={styles.button}>Contact Me</Button>
</div>
       
      </div>

      {/* <div className={styles.image}>
      <img src={sideImage} />
      </div> */}
    </section>
      
    </>
  );
};

export default Home;
