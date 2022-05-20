package com.selfimprovementplatform.controller;

import com.selfimprovementplatform.model.User;
import com.selfimprovementplatform.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@Log4j2
public class AuthController {
    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<User> login(@Param("username") String username, @Param("password") String password){
        log.info("login");
        return ResponseEntity.ok(userService.login(username, password));
    }
    @PostMapping
    public void register(@Param("username") String username, @Param("password") String password){
        log.info("register");
        userService.register(username, password);
    }
}
