package com.selfimprovementplatform.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Task {
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false)
    private String text;
    @Column(nullable = false)
    private boolean isChecked;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Task(String text, User user) {
        this.text = text;
        this.user = user;
        this.isChecked = false;
    }
}
