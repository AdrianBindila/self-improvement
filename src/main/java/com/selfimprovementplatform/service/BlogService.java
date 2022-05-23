package com.selfimprovementplatform.service;

import com.selfimprovementplatform.model.BlogPost;
import com.selfimprovementplatform.repository.BlogPostRepository;
import com.selfimprovementplatform.repository.BloggerRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The type Blog service.
 */
@Service
@Log4j2
public class BlogService {
    /**
     * The Blog post repository.
     */
    @Autowired
    BlogPostRepository blogPostRepository;
    /**
     * The Blogger repository.
     */
    @Autowired
    BloggerRepository bloggerRepository;

    /**
     * Gets blog posts.
     *
     * @return the blog posts
     */
    public List<BlogPost> getBlogPosts() {
        log.info("Getting blog posts");
        return blogPostRepository.findAll();
    }

    /**
     * Gets blog post.
     *
     * @param id the id
     * @return the blog post
     */
    public BlogPost getBlogPost(Long id) {
        log.info("Getting blog post with id: " + id);
        return blogPostRepository.findById(id).orElseThrow();
    }

    /**
     * Gets blog post by author.
     *
     * @param author the author
     * @return the blog post by author
     */
    public List<BlogPost> getBlogPostByAuthor(String author) {
        log.info("Getting blog posts by author: " + author);
        return blogPostRepository.findByAuthor(author);
    }

    /**
     * Create blog post.
     *
     * @param blogPost the blog post
     * @param authorId the author id
     */
    public void createBlogPost(BlogPost blogPost, Long authorId) {
        log.info("Creating blog post: " + blogPost);
        blogPost.setBlogger(bloggerRepository.findById(authorId).orElseThrow());
        blogPostRepository.save(blogPost);
    }

    /**
     * Delete blog post.
     *
     * @param id the id
     */
    public void deleteBlogPost(Long id) {
        log.info("Deleting blog post with id: " + id);

    }
}
