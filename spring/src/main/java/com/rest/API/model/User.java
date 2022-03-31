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
    private String user_name;
    @NotBlank
    private String author_name;
    @NotBlank
    private String isbn;
    public User(){
        super();
    }
    public User(Long id, String user_name, String author_name, String isbn) {
        super();
        this.id = id;
        this.user_name = user_name;
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
        return user_name;
    }
    public void setUser_name(String user_name) {
        this.user_name = user_name;
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
