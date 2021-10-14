package com.ergys2000.wikibuilder.services;

import com.ergys2000.wikibuilder.db_models.Project;
import com.ergys2000.wikibuilder.db_models.User;
import com.ergys2000.wikibuilder.repositories.ProjectsRepository;
import com.ergys2000.wikibuilder.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {
    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private ProjectsRepository projectsRepository;

    public Optional<User> getUserById(Integer id) {
        return usersRepository.findById(Long.valueOf(id));
    }

    public List<Project> getUserProjects(Integer id) {
        Optional<User> user = usersRepository.findById(Long.valueOf(id));
        return user.map(User::getProjects).orElse(null);
    }

    public void createNewProject(Integer userId, Project project) throws Exception {
        Optional<User> user = usersRepository.findById(Long.valueOf(userId));
        if(!user.isPresent()) {
            throw new Exception("User does not exist!");
        }
        /* Set the user that has uploaded this as the only member */
        List<User> users = Arrays.asList(user.get());
        project.setMembers(users);
        projectsRepository.save(project);
    }

    public void updateProject(Integer projectId, Project project) throws Exception {
        Optional<Project> projectInDb = projectsRepository.findById(Long.valueOf(projectId));
        if(!projectInDb.isPresent()) {
            throw new Exception("There is no project with that id!");
        }
        projectInDb.get().setDescription(project.getDescription());
        projectInDb.get().setCreatedAt(project.getCreatedAt());
        projectInDb.get().setTitle(project.getTitle());
        projectsRepository.save(projectInDb.get());
    }

    public Project getProject(Integer projectId) throws Exception {
        Optional<Project> project = projectsRepository.findById(Long.valueOf(projectId));
        if(!project.isPresent()) {
            throw new Exception("The project id does not exist!");
        }
        return project.get();
    }

}
