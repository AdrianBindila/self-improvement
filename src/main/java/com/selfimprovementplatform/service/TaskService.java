package com.selfimprovementplatform.service;

import com.selfimprovementplatform.model.Task;
import com.selfimprovementplatform.model.User;
import com.selfimprovementplatform.repository.TaskRepository;
import com.selfimprovementplatform.repository.UserRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Task> getUserTasks(Long id) {
        log.info("Getting tasks for user with id: " + id);
        return taskRepository.findAllByUserId(id);
    }

    public void addTask(Long id, String text) {
        log.info("Adding task: " + text + " for user with id: " + id);
        User user = userRepository.getById(id);
        Task task = new Task(text, user);
        taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        log.info("Deleting task with id: " + id);
        taskRepository.deleteById(id);
    }

    public void checkTask(Long id) {
        log.info("Checking task with id: " + id);
        Task task = taskRepository.getById(id);
        task.setChecked(!task.isChecked());
        taskRepository.save(task);
    }
}
