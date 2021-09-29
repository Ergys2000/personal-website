package com.ergys2000.wikibuilder.db_models;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Category {
    @Id @GeneratedValue
    private Long id;

    @Column(name = "createdAt")
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    private Category parentGroup;

    @OneToMany(mappedBy = "parentGroup", fetch = FetchType.LAZY)
    private Set<Category> childCategories = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Category getParentGroup() {
        return parentGroup;
    }

    public void setParentGroup(Category parentGroup) {
        this.parentGroup = parentGroup;
    }

    public Set<Category> getChildCategories() {
        return childCategories;
    }

    public void setChildCategories(Set<Category> childCategory) {
        this.childCategories = childCategory;
    }
}
