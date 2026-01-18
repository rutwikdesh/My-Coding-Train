package com.springdemo.cruddemo.dao;

import com.springdemo.cruddemo.entity.Instructor;
import com.springdemo.cruddemo.entity.InstructorDetail;

public interface AppDAO {
    void save(Instructor theInstructor);

    Instructor findInstructorById(int theId);

    void deleteInstructorById(int theId);

    public InstructorDetail findInstructorDetailById(int theId);

    void deleteInstructorDetailById(int theId);
}
