package com.cloneinsta.basic.instagram.clone.modal;

import com.cloneinsta.basic.instagram.clone.dto.UserDto;
import jakarta.persistence.*;
import org.hibernate.annotations.Comment;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String caption;
    private String image;
    private String location;
    private LocalTime createdAt;


    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "id", column = @Column(name = "user_id")),
            @AttributeOverride(name = "email",column = @Column(name = "user_email"))
//            @AttributeOverride(name = "username",column = @Column(name = "user_email"))
    })
    private UserDto user;

    @OneToMany
    private List<Comment> Comments = new ArrayList<Comment>();

    @Embedded
    @ElementCollection
    @JoinTable(name = "likedByUsers",joinColumns = @JoinColumn(name = "user_id"))
    private Set<UserDto> likedByUsers = new HashSet<>();

//    Constructor
    public Post(Integer id, String caption, String image, String location, LocalTime createdAt, UserDto user, List<Comment> Comment, Set<UserDto> likedByUsers) {
        this.id = id;
        this.caption = caption;
        this.image = image;
        this.location = location;
        this.createdAt = createdAt;
        this.user = user;
        this.Comments = Comment;
        this.likedByUsers = likedByUsers;
    }

//    Getter&&Setter
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalTime createdAt) {
        this.createdAt = createdAt;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public List<Comment> getComments() {
        return Comments;
    }

    public void setComments(List<Comment> Comments) {
        this.Comments = Comments;
    }

    public Set<UserDto> getLikedByUsers() {
        return likedByUsers;
    }

    public void setLikedByUsers(Set<UserDto> likedByUsers) {
        this.likedByUsers = likedByUsers;
    }
}
