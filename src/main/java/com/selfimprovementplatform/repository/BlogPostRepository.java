package com.selfimprovementplatform.repository;

import com.selfimprovementplatform.model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
    Optional<BlogPost> findByTitle(String title);
    List<BlogPost> findByAuthor(String author);

}
