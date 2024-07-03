import React, { useEffect, useRef } from "react";
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import axios from "axios";


function TuiEditor(props) {
    const today = new Date();
    const editorRef = useRef();
    // const onChange = () => {
    //     const data = editorRef.current?.getInstance().getHTML();
    // };
    const handleClick = () => {
        // console.log(editorRef.current.getInstance().getHTML());
        alert(`제목 : ${props.title}`);
        alert(`타입 : ${props.type}`);
        alert(`내용 : ${editorRef.current.getInstance().getHTML()}`);
    }

    const addBoard = () => {
        axios.post(`api/board/write`, {
            title: props.title,
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        });
    };

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
                <button onClick={addBoard} className="btn btn-success padding-lr-20">등록</button>
            </div>
        </>
    );
}

export default TuiEditor;