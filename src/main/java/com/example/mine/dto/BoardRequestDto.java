package com.example.mine.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BoardRequestDto {
    private String type;
    private String title;
    private String content;
    private String userid;
}
