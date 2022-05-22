package com.selfimprovementplatform.dtos;

import lombok.Data;

@Data
public class TaskDTO {
    private Long id;
    private String text;
    private boolean isChecked;
}
