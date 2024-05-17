package com.cloneinsta.basic.instagram.clone.modal;

import com.cloneinsta.basic.instagram.clone.dto.UserDto;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "id", column = @Column(name = "user_id")),
            @AttributeOverride(name = "email",column = @Column(name = "user_email"))
    })
    private UserDto user;
    private String content;

    @Embedded
    @ElementCollection
    private Set<UserDto> likedByUsers = new HashSet<UserDto>();

    private LocalDateTime createdAt;

//    Constructor

    public Comment(Integer id, UserDto user, String content, Set<UserDto> likedByUsers, LocalDateTime createdAt) {
        this.id = id;
        this.user = user;
        this.content = content;
        this.likedByUsers = likedByUsers;
        this.createdAt = createdAt;
    }

//    Getter&&Setter

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Set<UserDto> getLikedByUsers() {
        return likedByUsers;
    }

    public void setLikedByUsers(Set<UserDto> likedByUsers) {
        this.likedByUsers = likedByUsers;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
