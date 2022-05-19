package com.selfimprovementplatform.service;

import com.selfimprovementplatform.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    User login(String username, String password);

    void register(String username, String password);

    void addUser(User user);

    void updateUser(User user);

    void deleteUser(User user);

    User findByUsername(String username);

}
