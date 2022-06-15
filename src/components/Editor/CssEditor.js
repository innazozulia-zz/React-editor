import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/css";

import { EditorContext } from "../../context/context";

function CssEditor() {
  const { css, setCss } = React.useContext(EditorContext);
  return (
    <AceEditor
      placeholder="Write your CSS code here..."
      mode="css"
      theme="solarized_dark"
      name="editor_css"
      value={css}
      onChange={(value) => setCss(value)}
      fontSize={16}
      height={1000}
      width={580}
      showPrintMargin={true}
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

export default CssEditor;
