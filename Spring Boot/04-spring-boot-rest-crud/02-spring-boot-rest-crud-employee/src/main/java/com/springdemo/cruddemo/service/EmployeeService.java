package com.springdemo.cruddemo.service;

import com.springdemo.cruddemo.entity.Employee;
import org.springframework.stereotype.Service;

import java.util.List;


public interface EmployeeService {
    List<Employee> findAll();
}
