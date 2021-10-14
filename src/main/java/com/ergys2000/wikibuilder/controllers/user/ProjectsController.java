package com.ergys2000.wikibuilder.controllers.user;

import com.ergys2000.wikibuilder.db_models.Project;
import com.ergys2000.wikibuilder.services.UserService;
import com.ergys2000.wikibuilder.utils.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RequestMapping("/users/{userId}/projects")
@RestController
public class ProjectsController {
    @Autowired
    private UserService userService;

    @GetMapping("")
    public ResponseWrapper<List<Project>> getProjects(@PathVariable("userId") Integer userId) {
        List<Project> projects = userService.getUserProjects(userId);
        return new ResponseWrapper<List<Project>>("OK", projects, "");
    }

    @GetMapping("/{projectId}")
    public ResponseWrapper<Project> getProject(@PathVariable("projectId") Integer projectId) {
        try {
            return new ResponseWrapper<>("OK", userService.getProject(projectId), "");
        } catch (Exception e) {
            return new ResponseWrapper<>("ERROR", null, e.getMessage());
        }
    }

    @PostMapping("/")
    public ResponseWrapper<Project> postProject(@PathVariable("userId") Integer userId, Project project) {
        try {
            userService.createNewProject(userId, project);
            return new ResponseWrapper<>("OK", project, "The project was added!");
        } catch (Exception e) {
            return new ResponseWrapper<>("ERROR", null, e.getMessage());
        }
    }

    @PutMapping("/{projectId}")
    public ResponseWrapper<Project> putProject(@PathVariable("projectId") Integer projectId, Project project) {
        try {
            userService.updateProject(projectId, project);
            return new ResponseWrapper<>("OK", project, "The project was updated!");
        } catch (Exception e) {
            return new ResponseWrapper<>("ERROR", null, e.getMessage());
        }
    }

    @DeleteMapping("/{projectId}")
    public void deleteProject() {
        /* TODO: Implement this function */
    }

    @GetMapping("/{projectId}/categories")
    public void getProjectBaseCategories() {
        /* TODO: Implement this function */
    }
}
