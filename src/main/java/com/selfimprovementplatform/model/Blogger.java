package com.selfimprovementplatform.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "bloggers")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@PrimaryKeyJoinColumn(name = "id")
public class Blogger extends User {
    public Blogger(User user) {
        super(user);
    }
    @OneToMany(mappedBy = "blogger", cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<BlogPost> blogPosts;
}
