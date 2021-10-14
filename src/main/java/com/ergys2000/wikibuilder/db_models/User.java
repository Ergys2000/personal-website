package com.ergys2000.wikibuilder.db_models;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 30)
    private String firstname;

    @Column(length = 30)
    private String lastname;

    @Column(unique = true, length = 60)
    private String email;

    @Column(length = 255)
    private String password;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Project> projects;

    public Long getId() {
        return id;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) { this.lastname = lastname; }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
