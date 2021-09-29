package com.ergys2000.wikibuilder.repositories;

import com.ergys2000.wikibuilder.db_models.Project;
import com.ergys2000.wikibuilder.db_models.User;
import org.springframework.data.repository.CrudRepository;

public interface ProjectsRepository extends CrudRepository<Project, Long> {
}