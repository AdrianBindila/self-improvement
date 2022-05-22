package com.selfimprovementplatform.controller;

import com.selfimprovementplatform.dtos.RegisterDTO;
import com.selfimprovementplatform.dtos.UserDTO;
import com.selfimprovementplatform.model.User;
import com.selfimprovementplatform.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
@Log4j2
public class AuthController {
    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public ResponseEntity<? extends UserDTO> login(@Param("username") String username, @Param("password") String password) {
        log.info("login");
        ModelMapper modelMapper = new ModelMapper();
        User user = userService.login(username, password);
        return ResponseEntity.ok(modelMapper.map(user, UserDTO.class));
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.OK)
    public void register(@RequestBody RegisterDTO user) {
        log.info("register");
        ModelMapper modelMapper = new ModelMapper();
        User newUser = modelMapper.map(user, User.class);
        userService.register(newUser);
    }
}
