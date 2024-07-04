import React, { useEffect, useRef } from "react";
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function TuiEditor(props) {
    const today = new Date();
    const editorRef = useRef();
    const navigate = useNavigate();

    const addBoard = () => {
        if(props.title === "" || editorRef.current.getInstance().getHTML() === ""){
            alert("제목, 내용을 제대로 써주세요.")
            return ;
        }
        axios.post(`api/board/write`, {
            type : props.type,
            title: props.title,
            content : editorRef.current.getInstance().getHTML(),
            userid : "abc",
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        });
        alert("작성이 완료 되었습니다.");
        navigate('/');
    };

    return (
        <>
            <Editor
                ref={editorRef}
                height="600px"
                language="ko-KR"
                initialValue="content"
                theme='dark'
            />
            <div className="bg-color-black padding-top-30 text-align-end padding-lr-20">
                <button onClick={addBoard} className="btn btn-success padding-lr-20">등록</button>
            </div>
        </>
    );
}

export default TuiEditor;