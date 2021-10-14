package com.ergys2000.wikibuilder.db_models;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Project {
    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 40)
    private String title;

    @OneToOne
    private Body description;

    @Column
    private LocalDate createdAt;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<User> members;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<User> getMembers() {
        return members;
    }

    public void setMembers(List<User> members) {
        this.members = members;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Body getDescription() {
        return description;
    }

    public void setDescription(Body description) {
        this.description = description;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }
}
