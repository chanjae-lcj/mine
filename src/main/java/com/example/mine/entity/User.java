package com.example.mine.entity;

import com.example.mine.dto.UserRequestDto;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(length = 50, nullable = false, unique = true)
    private String account;

    @Column(length = 100, nullable = false)
    private String password;
    
    @Column(length = 50, nullable = false, unique = true)
    private String username;
    
    @Enumerated(EnumType.STRING)
    private Role role;
    
    @OneToOne(mappedBy = "user", cascade = CascadeType.REMOVE)
    private Auth auth;

    @Builder
    public User(String account, String username, String password, Role role) {
    	this.role = role;
        this.account = account;
        this.username = username;
        this.password = password;
    }

    public void update(UserRequestDto requestDto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }
}