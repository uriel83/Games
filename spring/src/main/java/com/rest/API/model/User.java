package com.rest.API.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity 
@Table(name = "users") 
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @NotBlank 
    private String User_name;
    @NotBlank
    private String author_name;
    @NotBlank
    private String isbn;
    public User(){
        super();
    }
    public User(Long id, String User_name, String author_name, String isbn) {
        super();
        this.id = id;
        this.User_name = User_name;
        this.author_name = author_name;
        this.isbn=isbn;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getUser_name() {
        return User_name;
    }
    public void setUser_name(String User_name) {
        this.User_name = User_name;
    }
    public String getAuthor_name() {
        return author_name;
    }
    public void setAuthor_name(String author_name) {
        this.author_name = author_name;
    }
    public String getIsbn() {
        return isbn;
    }
    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }
}
