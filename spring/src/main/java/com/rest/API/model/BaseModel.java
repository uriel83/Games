package com.rest.API.model;

import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class BaseModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

}

// package com.tachles.users.models;

// import com.fasterxml.jackson.annotation.JsonManagedReference;
// import lombok.*;
// import javax.persistence.*;
// import java.time.LocalDate;
// import java.util.*;

// @Entity
// @Table
// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor

// public class User extends BaseModel {
//     @Column(unique=true)
//     private String userName;
//     @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//     private PersonalInformation men;
//     @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//     private PersonalInformation women;
//     @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//     private Role role;
//     @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//     private Address address;
//     @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//     private BankAccount bankAccount;
//     private LocalDate dateOfMarriage;
//     @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
//     @JsonManagedReference
//     private List<Child> children;
//     private String shtibel;
//     private String password;


// }





// package com.tachles.users.models;

// import com.fasterxml.jackson.annotation.JsonBackReference;
// import lombok.*;

// import javax.persistence.*;
// import java.sql.Date;

// @Entity
// @Table
// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor

// public class Child extends BaseModel {
//     @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//     private Name name;
//     private Date DOB;
//     private String sex;
//     private String maritalStatus;
//     private String placeOfStudy;
//     @ManyToOne
//     @JsonBackReference
//     private User user;
// }
