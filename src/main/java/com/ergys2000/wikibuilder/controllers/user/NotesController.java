package com.ergys2000.wikibuilder.controllers.user;

import com.ergys2000.wikibuilder.db_models.Note;
import com.ergys2000.wikibuilder.repositories.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/users/${userId}/notes")
public class NotesController {
    @Autowired
    private NotesRepository notesRepository;

    @GetMapping(path = "")
    Iterable<Note> getNotes() {
        return notesRepository.findAll();
    }
}
