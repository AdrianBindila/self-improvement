package com.selfimprovementplatform.service;

import org.springframework.stereotype.Service;

@Service
public interface AdminService {
    void promoteUser(String username);
    void demoteUser(String username);
    void deleteUser(String username);
    //public void deletePost(String postId);
}
