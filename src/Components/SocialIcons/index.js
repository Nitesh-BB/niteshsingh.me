import { IconButton } from "@mui/material";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import styles from "./social.module.css";

const Social = () => {
    https://github.com/Nitesh-BB

  return (
    <div className={styles.iconMainContainer}>
      <div className={styles.iconContainer}>
        <IconButton className={styles.iconButton} onClick={ () => {window.open("https://github.com/Nitesh-BB", '_blank').focus();}}>
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton className={styles.iconButton} onClick={ () => {window.open("https://facebook.com/nite0sh", '_blank').focus();}}>
          <Facebook fontSize="large" />
        </IconButton>
        <IconButton className={styles.iconButton} onClick={ () => {window.open("https://www.linkedin.com/in/iamnitesh/", '_blank').focus();}}>
          <LinkedIn fontSize="large" />
        </IconButton>

        <span className={styles.verticalLine}></span>
      </div>
    </div>
  );
};

export default Social;
