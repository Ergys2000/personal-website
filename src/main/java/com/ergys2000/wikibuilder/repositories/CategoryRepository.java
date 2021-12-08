package com.ergys2000.wikibuilder.repositories;

import com.ergys2000.wikibuilder.db_models.Category;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long> {
    /* TODO: Get categories who have no parent and belong to a project*/
}
