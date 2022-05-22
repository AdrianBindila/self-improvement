package com.selfimprovementplatform.repository;

import com.selfimprovementplatform.model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
    Optional<BlogPost> findByTitle(String title);
    List<BlogPost> findByAuthor(String author);

}
