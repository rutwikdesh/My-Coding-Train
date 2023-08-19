package com.springdemo.cruddemo.rest;

import com.springdemo.cruddemo.dao.EmployeeDAO;
import com.springdemo.cruddemo.entity.Employee;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmployeeRestController {
    private EmployeeDAO employeeDAO;

    public EmployeeRestController(EmployeeDAO theEmployeeDAO){
        employeeDAO = theEmployeeDAO;
    }

    @GetMapping("/employees")
    public List<Employee> findAllEmployees(){
        return employeeDAO.findAll();
    }
}
