package com.example.mine.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;

@Entity
@Data
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String type;

    private String title;

    private String content;

    private String userid;

    @CreatedDate
    private LocalDateTime createtime;

    private Integer likes;

    private Integer counts;

    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    // private Integer id;

    // private String title;
    
    // private String content;
}
