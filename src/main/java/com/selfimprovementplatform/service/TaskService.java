package com.selfimprovementplatform.service;

import org.springframework.stereotype.Service;

@Service
public interface TaskService {
    void createTask(String taskName);
    void deleteTask(String taskName);
    void updateTask(String taskName, String newTaskName);
    void getUserTasks(String userName);
}
