package com.example.mine.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.mine.dto.BoardRequestDto;
import com.example.mine.entity.Board;
import com.example.mine.repository.BoardRepository;

@Service
public class BoardService {
    
    @Autowired
    private BoardRepository boardRepository;

    public Page<Board> boardList(Pageable pageable){
        return boardRepository.findAll(pageable);
    }

    public Board boardview(Integer id){
        return boardRepository.findById(id).get();
    }

    public void writeBoard(BoardRequestDto entity){
        Board board = new Board();
        board.setType(entity.getType());
        board.setTitle(entity.getTitle());
        board.setContent(entity.getContent());
        board.setUserid(entity.getUserid());
        board.setLikes(0);
        board.setCounts(0);
        boardRepository.save(board);
    }
}
