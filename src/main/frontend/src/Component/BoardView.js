/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Viewer } from '@toast-ui/react-editor';
import { useSearchParams } from 'react-router-dom';


const BoardView = (props) => {
    const [board, setBoard] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        axios.get(`/api/boardview?id=${id}`)
            .then(response => setBoard(response.data));
    })
    // const getData = () => {
    //     axios.get(`/api/boardview?id=${id}`)
    //         .then(response => setBoard(response.data));
    // }

    return (
        <div className="margin-left-20">
            <br />
            <h2>{board.title}</h2>
            <hr />
            <div className="text-align-end padding-lr-10"><p>작성자 : {board.userid}</p></div>
            <div className="border-0_5 border-radius-10 padding-20 height-500">
                {board.content&&<Viewer events={['load','change']} initialValue={board.content} theme="dark"/>}
            </div>
            
        </div>
    );
}

export default BoardView;