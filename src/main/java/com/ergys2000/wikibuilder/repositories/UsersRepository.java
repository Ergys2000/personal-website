package com.ergys2000.wikibuilder.repositories;

import com.ergys2000.wikibuilder.db_models.User;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<User, Long> {
}
