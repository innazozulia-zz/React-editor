import React from "react";

const EditorContext = React.createContext();

const EditorProvider = ({ children }) => {
  const [html, setHtml] = React.useState("");
  const [css, setCss] = React.useState("");
  const [js, setJs] = React.useState("");

  const value = {
    html,
    css,
    js,
    setHtml,
    setCss,
    setJs,
  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export { EditorProvider, EditorContext };
