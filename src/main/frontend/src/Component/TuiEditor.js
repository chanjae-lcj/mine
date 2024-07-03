import React from "react";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'

function TuiEditor() {
    return (
        <Editor
            height="600px"
            language="ko-KR"
            initialValue="content"
            theme='dark'
        />
    );
  }
  
  export default TuiEditor;