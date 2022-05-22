package com.selfimprovementplatform.service;

import com.selfimprovementplatform.model.User;
import com.selfimprovementplatform.repository.RoleRepository;
import com.selfimprovementplatform.repository.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class UserServiceImpl implements UserService {
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public User login(String username, String password) {
        User user = userRepository.findByUsername(username).orElseThrow();
        if (user.getPassword().equals(password)) {
            return user;
        } else {
            log.error("Wrong password");
            return new User();
        }
    }

    @Override
    public void register(User user) {
        userRepository.save(user);
        log.info("User registered: " + user);
    }

    @Override
    public void updateUser(User user) {

    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
