package com.ergys2000.wikibuilder.repositories;


import com.ergys2000.wikibuilder.db_models.Note;
import org.springframework.data.repository.CrudRepository;

public interface NotesRepository extends CrudRepository<Note, Long> {
}
