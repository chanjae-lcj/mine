import React, { useState } from 'react';
import TuiEditor from './TuiEditor';

const Board = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const onChange = (e) => { setTitle(e.target.value) };
    return (
        <div className='margin-left-20'>
            <br />
            <br />
            <br />
            <h2>글쓰기</h2>
            <hr />
            <br />
            <div className='padding-20 border-0_5 border-radius-10'>
                {/* <div class="dropdown text-align-end">
                    <button class="btn btn-dark dropdown-toggle padding-lr-20" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        자유 게시판
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item active" href="#">자유 게시판</a></li>
                        <li><a class="dropdown-item" href="#">공지 사항</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </div> */}
                <div className='text-align-end'>
                    <select className='' value={type} onChange={e => setType(e.target.value)}>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="titleInput" className="form-label">Title</label>
                    <input type="text" className="form-control bgColor-dark color-white" id="titleInput" name='titleInput' onChange={onChange} />
                </div>
            </div>
            <br />
            <br />
            <div className='border-radius-10'>
                <TuiEditor title={title} type={type}/>
            </div>

        </div>
    );
};

export default Board;