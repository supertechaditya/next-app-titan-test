import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./solution.module.css";

const SolutionDescription = () => {
  const [text, setText] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const [summary, setSummary] = useState("Loading...");
  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await fetch(
          `https://brainapis.titanspace.repl.co/api/experiments/getSuggestedExperiments/1/2`
        );
        const data = await res.json();
        console.log(data);
        setSummary(data[0].summary);
      } catch (err) {
        console.log(err);
      }
    };
    callAPI();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <p className={styles.heading}>Solution description</p>
        <div className={styles.selectionContainer}>
          <div className={styles.selectionbox}>
            <p className={styles.selectionheading}>
              What should this solution look like?
            </p>
            <textarea
              className={styles.inputbox}
              placeholder="Ex. Sleek, colorful, and compact"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={(e) => setOnFocus(true)}
            />
            {text && onFocus && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  gap: "10px",
                }}
              >
                <div style={{ width: "100%" }}></div>
                <Image
                  src="/tick.svg"
                  className={styles.pointer}
                  width={20}
                  height={20}
                  onClick={() => {
                    setOnFocus(false);
                  }}
                />
                <Image
                  src="/cross.svg"
                  className={styles.pointer}
                  width={20}
                  height={20}
                  onClick={() => {
                    setText("");
                    setOnFocus(false);
                  }}
                />
              </div>
            )}
            {/* <p className={styles.selectiondescription}>{environment.description}</p> */}
          </div>
        </div>
        <Link href="/solution" className={styles.button}>
          run simulation
        </Link>
      </div>
      <div className={styles.textarea}>
        <div className={styles.materialsdata}>
          <p className={styles.selectionheading}>Summary</p>
          <p className={styles.selectiondescription}>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionDescription;
