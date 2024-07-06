package com.example.mine.dto;

import com.example.mine.entity.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto {
    private Long id;
    private String role;
    private String account;
    private String username;
    
    public UserResponseDto(User entity) {
    	this.id = entity.getId();
        this.account = entity.getAccount();
        this.username = entity.getUsername();
        // Enum -> String
        this.role = entity.getRole().name();
    }
}