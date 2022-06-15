import React from "react";

import CssEditor from "../Editor/CssEditor";
import JsEditor from "../Editor/JsEditor";
import HtmlEditor from "../Editor/HtmlEditor";
import styles from "./codeBar.module.css";

function CodeBar() {
  const [activeTab, setActiveTab] = React.useState("HTML");
  return (
    <div className={styles.codebar}>
      <nav className={styles.nav}>
        <button
          onClick={() => setActiveTab("HTML")}
          className={`${styles.item} ${
            activeTab === "HTML" ? styles.active : ""
          }`}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab("CSS")}
          className={`${styles.item} ${
            activeTab === "CSS" ? styles.active : ""
          }`}
        >
          CSS
        </button>
        <button
          onClick={() => setActiveTab("JS")}
          className={`${styles.item} ${
            activeTab === "JS" ? styles.active : ""
          }`}
        >
          JS
        </button>
      </nav>
      <div className={styles.editor}>
        {activeTab === "HTML" ? (
          <div>
            <HtmlEditor />
          </div>
        ) : null}
        {activeTab === "CSS" ? (
          <div>
            <CssEditor />
          </div>
        ) : null}
        {activeTab === "JS" ? (
          <div>
            <JsEditor />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CodeBar;
