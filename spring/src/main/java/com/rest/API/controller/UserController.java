package com.rest.API.controller;

import com.rest.API.exception.UserNotFoundException;
import com.rest.API.model.User;
import com.rest.API.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import javax.validation.Valid;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    // Get All Notes
    @GetMapping("/users")
    public List<User> getAllNotes() {
        return userRepository.findAll();
    }

    // Create a new Note
    @PostMapping("/users")
    public User createNote(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }

    // Get a Single Note
    @GetMapping("/users/{id}")
    public User getNoteById(@PathVariable(value = "id") Long userId) throws UserNotFoundException {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
    }

    // Update a Note
    @PutMapping("/users/{id}")
    public User updateNote(@PathVariable(value = "id") Long userId,
                           @Valid @RequestBody User userDetails) throws UserNotFoundException {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));

        user.setUser_name(userDetails.getUser_name());
        user.setAuthor_name(userDetails.getAuthor_name());
        user.setIsbn(userDetails.getIsbn());

        User updatedUser = userRepository.save(user);

        return updatedUser;
    }


    // Delete a Note
    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long userId) throws UserNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));

        userRepository.delete(user);

        return ResponseEntity.ok().build();
    }
    
}
