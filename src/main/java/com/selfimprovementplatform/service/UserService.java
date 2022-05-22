package com.selfimprovementplatform.service;

import com.selfimprovementplatform.dtos.RegisterDTO;
import com.selfimprovementplatform.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User login(String username, String password);

    void register(User newUser);

    void setRole(Long id, String role);

    void deleteUser(Long id);

    List<User> getUsers();
}
