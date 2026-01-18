package com.springdemo.demo.rest;

import com.springdemo.demo.entity.Student;
import jakarta.annotation.PostConstruct;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentRestController {
    private List<Student> theStudents;

    // Define @PostConstruct to load data only once...!
    @PostConstruct
    public void loadData(){
        theStudents = new ArrayList<>();
        theStudents.add(new Student("John", "Doe"));
        theStudents.add(new Student("Kay", "Rossi"));
        theStudents.add(new Student("Mario", "Niee"));
    }

    @GetMapping("/students")
    public List<Student> getStudents(){
        return theStudents;
    }

    @GetMapping("/students/{studentId}")
    public Student getStudent(@PathVariable int studentId){
        if(studentId >= theStudents.size() || studentId < 0) {
            throw new StudentNotFoundException("Student ID not found - " + studentId);
        }
        return theStudents.get(studentId);
    }
}
