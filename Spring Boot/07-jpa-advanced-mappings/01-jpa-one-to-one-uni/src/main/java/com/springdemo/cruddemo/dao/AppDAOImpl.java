package com.springdemo.cruddemo.dao;

import com.springdemo.cruddemo.entity.Instructor;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

public class AppDAOImpl implements AppDAO{

    private EntityManager entityManager;
    @Autowired
    public AppDAOImpl(EntityManager theEntityManger){
        entityManager = theEntityManger;
    }

    @Override
    @Transactional
    public void save(Instructor theInstructor) {
        entityManager.persist(theInstructor);
        // The above operation will also save the Instructor Details
        // Object as it is set to Cascade Type All
    }
}
