import React, { useRef } from "react";
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor} from '@toast-ui/react-editor'
import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'


function TuiEditor() {
    const editorRef = useRef();
    // const onChange = () => {
    //     const data = editorRef.current?.getInstance().getHTML();
    // };
    const handleClick = () => {
        // console.log(editorRef.current.getInstance().getHTML());
        alert(editorRef.current.getInstance().getHTML());
    }
    return (
        <>
            <Editor
                ref={editorRef}
                height="600px"
                language="ko-KR"
                initialValue="content"
                theme='dark'
                // onChange={onChange}
            />
            <div className="bg-color-black padding-top-30 text-align-end padding-lr-20">
                <button onClick={handleClick} className="btn btn-success padding-lr-20">등록</button>
            </div>
        </>
    );
}

export default TuiEditor;