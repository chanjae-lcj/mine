/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Viewer, Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import axios from "axios";
import { useSearchParams } from 'react-router-dom';


const BoardView = (props) => {
    const [board, setBoard] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        axios.get(`/api/boardview?id=${id}`)
            .then(response => setBoard(response.data));
    })

    return (
        <div className="margin-left-20">
            <br />
            <h2>{board.title}</h2>
            <hr />
            <div className="text-align-end"><p>{board.userid}</p></div>
            
            {/* {board.content} */}
            {/* {board.content} */}
            <div className="border-0_5 border-radius-10 padding-20">
                {board.content}
                {/* <Viewer initialValue={"regreg"} /> */}
            </div>
            
        </div>
    );
}

export default BoardView;