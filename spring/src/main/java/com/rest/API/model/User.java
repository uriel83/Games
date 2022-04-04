package com.rest.API.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity 
@Table(name = "users") 
public class User extends BaseModel{
  
    @NotBlank 
    private String first_name;
    @NotBlank
    private String last_name;
    @NotBlank
    private String email;
    @NotBlank
    private String password;
    public User(){
        super();
    }
    public User( String first_name, String last_name, String email, String password) {
        super();
        
        this.first_name = first_name;
        this.last_name = last_name;
        this.email=email;
        this.password=password;
    }
   
    public String getFirst_name() {
        return first_name;
    }
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }
    public String getLast_name() {
        return last_name;
    }
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
