package com.selfimprovementplatform.service;

import com.selfimprovementplatform.model.Blogger;
import com.selfimprovementplatform.model.User;
import com.selfimprovementplatform.repository.BloggerRepository;
import com.selfimprovementplatform.repository.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.apache.tomcat.util.security.MD5Encoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The type User service.
 */
@Service
@Log4j2
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BloggerRepository bloggerRepository;

    @Override
    public User login(String username, String password) {
        User user = userRepository.findByUsername(username).orElseThrow();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        if (passwordEncoder.matches(password, user.getPassword())) {
            return user;
        } else {
            log.error("Wrong password");
            return new User();
        }
    }

    @Override
    public void register(User user) {
        user.setPassword(new BCryptPasswordEncoder(10).encode(user.getPassword()));
        userRepository.save(user);
        log.info("User registered: " + user);
    }

    @Override
    public void setRole(Long id, String role) {
        User user = userRepository.findById(id).orElseThrow();
        user.setRole(role);
        if(role.equals("BLOGGER")) {
            userRepository.deleteById(id);
            bloggerRepository.save(new Blogger(user));
        }else{
            bloggerRepository.deleteById(id);
            userRepository.save(user);
        }
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public void updateUserHydration(Long id, Integer hydration) {
        User user = userRepository.findById(id).orElseThrow();
        user.setHydration(hydration);
        userRepository.save(user);
    }

}
