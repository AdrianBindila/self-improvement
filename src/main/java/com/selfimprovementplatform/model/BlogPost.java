package com.selfimprovementplatform.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "blogposts")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class BlogPost {
    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String content;
    private String author;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="blogger_id")
    private Blogger blogger;
}
