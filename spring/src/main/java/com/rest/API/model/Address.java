package com.rest.API.model;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "address") 
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Address extends BaseModel {
    // private String state;
    private String city;
    // private String street;
    // private int buildingNumber;
    // private int apartment;
    // private int zipCode;
    
}
