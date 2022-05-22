package com.selfimprovementplatform.service;

import com.selfimprovementplatform.model.BlogPost;
import com.selfimprovementplatform.repository.BlogPostRepository;
import com.selfimprovementplatform.repository.BloggerRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class BlogService {
    @Autowired
    BlogPostRepository blogPostRepository;
    @Autowired
    BloggerRepository bloggerRepository;

    public List<BlogPost> getBlogPosts() {
        log.info("Getting blog posts");
        return blogPostRepository.findAll();
    }

    public BlogPost getBlogPost(Long id) {
        log.info("Getting blog post with id: " + id);
        return blogPostRepository.findById(id).orElseThrow();
    }

    public List<BlogPost> getBlogPostByAuthor(String author) {
        log.info("Getting blog posts by author: " + author);
        return blogPostRepository.findByAuthor(author);
    }

    public void createBlogPost(BlogPost blogPost, Long authorId) {
        log.info("Creating blog post: " + blogPost);
        blogPost.setBlogger(bloggerRepository.findById(authorId).orElseThrow());
        blogPostRepository.save(blogPost);
    }

    public void deleteBlogPost(Long id) {
        log.info("Deleting blog post with id: " + id);

    }
}
