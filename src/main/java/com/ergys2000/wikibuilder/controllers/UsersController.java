package com.ergys2000.wikibuilder.controllers;

import com.ergys2000.wikibuilder.db_models.Project;
import com.ergys2000.wikibuilder.db_models.User;
import com.ergys2000.wikibuilder.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("users/{userId}")
public class UsersController {
    @Autowired
    UserService userService;

    @GetMapping
    public Optional<User> getUser(@PathVariable("userId") Integer userId) {
        return userService.getUserById(userId);
    }

    @GetMapping("/projects")
    public Set<Project> getProjects(@PathVariable("userId") Integer userId) {
        return userService.getUserProjects(userId);
    }

    @PostMapping("/projects")
    public void postProject(@PathVariable("userId") Integer userId, Project project) {
        try {
            userService.createNewProject(Long.valueOf(userId), project);
        } catch (Exception e) {

        }
    }

}
