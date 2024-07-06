package com.example.mine.dto;

import com.example.mine.entity.Role;
import com.example.mine.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserRequestDto {
    private Role role;
    private String account;
    private String username;
    private String password;

    public User toEntity() {
        return User.builder()
                .role(this.role)
                .account(this.account)
                .username(this.username)
                .password(this.password)
                .build();
    }
}