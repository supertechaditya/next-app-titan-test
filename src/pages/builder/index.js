import Link from "next/link";
import React, { useState } from "react";
import styles from "./builder.module.css";
const data = [
  {
    name: "Terrestrial",
    description: "Habitat for diverse living organisms, water, atmosphere.",
  },
  {
    name: "Lunar",
    description: "Airless, rocky, dusty, extreme temperature fluctuations.",
  },
  {
    name: "Martian",
    description:
      "Cold, dry, rocky, thin atmosphere, extreme temperature fluctuations.",
  },
  {
    name: "Microgravity",
    description: "Observe an object without any gravitational effects.",
  },
];
const Builder = () => {
  const [selectedEnvironment, setSelectedEnvironment] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <p className={styles.heading}>Select an environment</p>
        <div className={styles.selectionContainer}>
          {data.map((environment) => {
            let boxStyle = styles.selectionbox;
            let headingStyle = styles.selectionheading;
            let descriptionStyle = styles.selectiondescription;
            if (environment.name === selectedEnvironment) {
              boxStyle = `${styles.selectionbox} ${styles.selectedBox}`;
              headingStyle = `${styles.selectionheading} ${styles.selectedText}`;
              descriptionStyle = `${styles.selectiondescription} ${styles.selectedText}`;
            }
            return (
              <div
                className={boxStyle}
                key={environment.name}
                onClick={() => {
                  setCount((count) => count + 1);
                  setSelectedEnvironment(environment.name);
                }}
              >
                <p className={headingStyle}>{environment.name}</p>
                <p className={descriptionStyle}>{environment.description}</p>
              </div>
            );
          })}
        </div>
        <Link href="/solution" className={styles.button}>
          NEXT
        </Link>
      </div>
      <div className={styles.textarea}>
        <div>
          <p style={{ display: "inline" }}>
            Environment selection: {!selectedEnvironment && "_"}
          </p>
          <p className={styles.environmenttext}>{selectedEnvironment}</p>
        </div>
        {selectedEnvironment && (
          <>
            <div>
              <div>
                <p style={{ display: "inline" }}>
                  Establishing environmental datalink . . .{" "}
                </p>
                <p className={styles.doneColor}>DONE</p>
              </div>
              <div>
                <p style={{ display: "inline" }}>
                  Retrieving environmental parameters . . .
                </p>
                <p className={styles.doneColor}>DONE</p>
              </div>
            </div>
            <p>TERRESTRIAL environment parameters:</p>
            <div style={{ padding: 10 }}>
              <p>Time (GMT) --------------- 16:24</p>
              <p>Gravity (G) ---------------- 1.0 </p>
              <p>Temperature (F) ----------- 76.0</p>
              <p>Radiation (kW/m^2) -------- 0.47</p>
              <p>Pressure (inHg) -----------30.01</p>
            </div>
            <div>
              <p style={{ display: "inline" }}>
                Creating simulation overlay . . .{" "}
              </p>
              <p className={styles.doneColor}>DONE</p>
            </div>
            <div>
              <p style={{ display: "inline" }}>Click </p>
              <p className={styles.environmenttext}>NEXT</p>{" "}
              <p style={{ display: "inline" }}>to proceed </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Builder;
