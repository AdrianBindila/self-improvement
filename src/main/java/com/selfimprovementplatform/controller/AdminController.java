package com.selfimprovementplatform.controller;

import com.selfimprovementplatform.model.User;
import com.selfimprovementplatform.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Log4j2
public class AdminController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        log.info("getUsers");
        return ResponseEntity.ok(userService.getUsers());
    }

    @PostMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        log.info("deleteUser");
        userService.deleteUser(id);
    }
}
