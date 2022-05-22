package com.selfimprovementplatform.dtos;

import lombok.Data;

@Data
public class BlogPostDTO {
    private Long id;
    private String title;
    private String content;
    private String author;

}
