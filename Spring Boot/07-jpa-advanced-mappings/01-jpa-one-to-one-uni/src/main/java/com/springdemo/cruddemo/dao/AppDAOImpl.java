package com.springdemo.cruddemo.dao;

import com.springdemo.cruddemo.entity.Instructor;
import com.springdemo.cruddemo.entity.InstructorDetail;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
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

    @Override
    public Instructor findInstructorById(int theId) {
        return entityManager.find(Instructor.class, theId);
    }

    @Override
    @Transactional
    public void deleteInstructorById(int theId) {

        // retrieve the instructor
        Instructor tempInstructor = entityManager.find(Instructor.class, theId);

        // delete the instructor
        entityManager.remove(tempInstructor);
    }

    @Override
    public InstructorDetail findInstructorDetailById(int theId) {
        return entityManager.find(InstructorDetail.class, theId);
    }

    @Override
    @Transactional
    public void deleteInstructorDetailById(int theId) {

        // retrieve instructor detail
        InstructorDetail tempInstructorDetail = entityManager.find(InstructorDetail.class, theId);

        // delete the instructor detail
        entityManager.remove(tempInstructorDetail);
    }
}
