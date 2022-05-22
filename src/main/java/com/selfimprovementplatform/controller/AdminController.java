package com.selfimprovementplatform.controller;

import com.selfimprovementplatform.model.User;
import com.selfimprovementplatform.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Log4j2
@RequestMapping("/admin")
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

    @PostMapping("/users/{id}/role")
    public void updateRole(@PathVariable("id") Long id, @Param("role") String role) {
        log.info("updateRole");
        userService.setRole(id, role);
    }
}
