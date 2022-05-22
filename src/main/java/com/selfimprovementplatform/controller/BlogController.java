package com.selfimprovementplatform.controller;

import com.selfimprovementplatform.dtos.BlogPostDTO;
import com.selfimprovementplatform.model.BlogPost;
import com.selfimprovementplatform.service.BlogService;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Log4j2
@RequestMapping("/blog")
public class BlogController {
    @Autowired
    private BlogService blogService;

    @PostMapping("/create-blog-post")
    public void createBlogPost(@RequestBody BlogPostDTO blogPostDTO, @Param("id") Long id) {
        ModelMapper modelMapper = new ModelMapper();
        log.info("Creating blog post");
        BlogPost blogPost = modelMapper.map(blogPostDTO, BlogPost.class);
        blogService.createBlogPost(blogPost, id);
    }

    @GetMapping("/get-blog-posts")
    public List<BlogPostDTO> getBlogPosts() {
        log.info("Getting blog posts");
        ModelMapper modelMapper = new ModelMapper();
        List<BlogPost> blogPosts=blogService.getBlogPosts();
        return blogPosts.stream().map(blogPost -> modelMapper.map(blogPost, BlogPostDTO.class)).toList();
    }

    @GetMapping("/get-blog-post")
    public BlogPost getBlogPost(Long id) {
        log.info("Getting blog post with id: " + id);
        return blogService.getBlogPost(id);
    }

    @GetMapping("/get-blog-posts-by-author")
    public List<BlogPost> getBlogPostByAuthor(String author) {
        log.info("Getting blog post by author: " + author);
        return blogService.getBlogPostByAuthor(author);
    }


    @PostMapping("/delete-blog-post")
    public void deleteBlogPost(Long id) {
        log.info("Deleting blog post with id: " + id);
        blogService.deleteBlogPost(id);
    }
}
