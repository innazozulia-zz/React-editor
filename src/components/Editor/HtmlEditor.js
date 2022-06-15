import React from "react";
import AceEditor from "react-ace";
// import styles from "./Editor.module.css";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/html";

import { EditorContext } from "../../context/context";

function HtmlEditor() {
  const { html, setHtml } = React.useContext(EditorContext);
  return (
    <AceEditor
      placeholder="Write your Html code here..."
      mode="html"
      theme="solarized_dark"
      name="editor_html"
      value={html}
      onChange={(value) => setHtml(value)}
      fontSize={16}
      height={700}
      width={590}
      editorProps={{ $blockScrolling: true }}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}

export default HtmlEditor;
