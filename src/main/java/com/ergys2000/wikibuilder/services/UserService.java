package com.ergys2000.wikibuilder.services;

import com.ergys2000.wikibuilder.db_models.Project;
import com.ergys2000.wikibuilder.db_models.User;
import com.ergys2000.wikibuilder.repositories.ProjectsRepository;
import com.ergys2000.wikibuilder.repositories.UsersRepository;
import com.sun.tools.javac.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private ProjectsRepository projectsRepository;

    public Optional<User> getUserById(Integer id) {
        return usersRepository.findById(Long.valueOf(id));
    }

    @NonNull
    public Set<Project> getUserProjects(Integer id) {
        Optional<User> user = usersRepository.findById(Long.valueOf(id));
        return user.<Set<Project>>map(User::getProjects).orElse(new HashSet<>());
    }

    public void createNewProject(Long userId, Project project) throws Exception {
        Optional<User> user = usersRepository.findById(userId);
        if(!user.isPresent()) {
            throw new Exception("User does not exist!");
        }
        /* Set the user that has uploaded this as the only member */
        HashSet<User> userHashSet = new HashSet<User>(List.of(user.get()));
        project.setMembers(userHashSet);
        projectsRepository.save(project);
    }
}
