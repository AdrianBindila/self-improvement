package com.selfimprovementplatform.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "blogposts")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class BlogPost {
    @Id
    @GeneratedValue
    private String id;

    private String title;
    private String content;
    private String author;

}
