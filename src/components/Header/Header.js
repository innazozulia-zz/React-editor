import React from "react";
import styles from "./Header.module.css";
import Webcam from "react-webcam";

import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";

function Header() {
  const [camera, setCamera] = React.useState(false);
  return (
    <>
      <header className={styles.header}>
        <button onClick={() => setCamera(!camera)} className={styles.button}>
          {camera ? (
            <BsFillCameraVideoFill fill="#fff" size={23} />
          ) : (
            <BsFillCameraVideoOffFill fill="#fff" size={23} />
          )}
        </button>
      </header>
      {camera ? (
        <Webcam
          className={styles.camera}
          audio={false}
          width={300}
          height={300}
          videoConstraints={{
            width: 300,
            height: 300,
            facingMode: "user",
          }}
        />
      ) : null}
    </>
  );
}

export default Header;
