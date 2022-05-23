package com.selfimprovementplatform.service;

import com.selfimprovementplatform.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The interface User service.
 */
@Service
public interface UserService {
    /**
     * Login user.
     *
     * @param username the username
     * @param password the password
     * @return the user
     */
    User login(String username, String password);

    /**
     * Register.
     *
     * @param newUser the new user
     */
    void register(User newUser);

    /**
     * Sets role.
     *
     * @param id   the id
     * @param role the role
     */
    void setRole(Long id, String role);

    /**
     * Delete user.
     *
     * @param id the id
     */
    void deleteUser(Long id);

    /**
     * Gets users.
     *
     * @return the users
     */
    List<User> getUsers();


    /**
     * Update user hydration.
     *
     * @param id        the id
     * @param hydration the hydration
     */
    void updateUserHydration(Long id, Integer hydration);

}
