import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/javascript";

import { EditorContext } from "../../context/context";

function JsEditor() {
  const { js, setJs } = React.useContext(EditorContext);
  return (
    <AceEditor
      placeholder="Write your JavaScript code here..."
      mode="javascript"
      theme="solarized_dark"
      name="editor_javascript"
      value={js}
      onChange={(value) => setJs(value)}
      fontSize={16}
      height={1000}
      width={580}
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

export default JsEditor;
