package com.selfimprovementplatform.service;

import com.selfimprovementplatform.model.Task;
import com.selfimprovementplatform.model.User;
import com.selfimprovementplatform.repository.TaskRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
class TaskServiceTest {
    @Mock
    TaskRepository taskRepository;

    @InjectMocks
    TaskService taskService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void getUserTasks() {
        User user = new User();
        user.setId(1L);
        List<Task> tasks=new ArrayList<>();
        Task task=new Task();
        task.setId(1L);
        task.setText("task1");
        task.setUser(user);
        when(taskRepository.findAllByUserId(user.getId())).thenReturn(tasks);
        assertEquals(tasks,taskService.getUserTasks(user.getId()));
    }

    @Test
    void addTask() {
        User user = new User();
        user.setId(1L);
        Task task=new Task();
        task.setText("task1");
        task.setUser(user);
        when(taskRepository.save(task)).thenReturn(task);
        when(taskRepository.findAllByUserId(user.getId())).thenReturn(List.of(task));
        assertEquals(task,taskService.getUserTasks(user.getId()).get(0));
    }

    @Test
    void deleteTask() {
        User user = new User();
        user.setId(1L);
        Task task=new Task();
        task.setId(1L);
        task.setText("task1");
        task.setUser(user);
        when(taskRepository.save(task)).thenReturn(task);
        when(taskRepository.findAllByUserId(user.getId())).thenReturn(new ArrayList<>());
        taskService.deleteTask(1L);
        assertEquals(0,taskService.getUserTasks(user.getId()).size());
    }

    @Test
    void checkTask() {
        User user = new User();
        user.setId(1L);
        Task task=new Task();
        task.setId(1L);
        task.setText("task1");
        task.setUser(user);
        when(taskRepository.getById(task.getId())).thenReturn(task);
        when(taskRepository.findAllByUserId(user.getId())).thenReturn(List.of(task));
        taskService.checkTask(1L);
        assertEquals(true,taskService.getUserTasks(user.getId()).get(0).isChecked());
    }
}