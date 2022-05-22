package com.selfimprovementplatform.controller;

import com.selfimprovementplatform.dtos.TaskDTO;
import com.selfimprovementplatform.model.Task;
import com.selfimprovementplatform.service.TaskService;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@Log4j2
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<TaskDTO> getUserTasks(@Param("id") Long id) {
        log.info("Getting all tasks");
        ModelMapper modelMapper = new ModelMapper();
        List<Task> userTasks = taskService.getUserTasks(id);
        return userTasks.stream().map(task -> modelMapper.map(task, TaskDTO.class)).toList();
    }

    @PostMapping
    public void addTask(@RequestBody TaskDTO taskDTO, @Param("id") Long id) {
        log.info("Adding task");
        taskService.addTask(id, taskDTO.getText());
    }
    @PostMapping("/{id}/remove")
    public void deleteTask(@PathVariable("id") Long id) {
        log.info("Deleting task");
        taskService.deleteTask(id);
    }
    @PostMapping("/{id}")
    public void checkTask(@PathVariable("id") Long id) {
        log.info("Checking task");
        taskService.checkTask(id);
    }
}