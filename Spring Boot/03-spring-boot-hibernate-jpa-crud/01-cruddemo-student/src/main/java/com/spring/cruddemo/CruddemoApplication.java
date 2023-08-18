package com.spring.cruddemo;

import com.spring.cruddemo.dao.StudentDAO;
import com.spring.cruddemo.entity.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CruddemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CruddemoApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(StudentDAO studentDAO){
		return runner -> {
//			createStudent(studentDAO);
//			createMultipleStudents(studentDAO);
			findStudent(studentDAO);
		};
	}

	private void findStudent(StudentDAO studentDAO) {
		Student std1 = new Student("Roe", "Kite", "roe@kite.com");
		studentDAO.save(std1);
		Integer id = std1.getId();

		Student std = studentDAO.findById(id);
		System.out.println(std);
	}

	private void createMultipleStudents(StudentDAO studentDAO) {
		// Create the student objects
		System.out.println("Creating 3 new student objects....");
		Student std1 = new Student("Ross", "Geller", "ross@geller.com");
		Student std2 = new Student("Rachel", "Green", "rachel@green.com");
		Student std3 = new Student("Chandler", "Bing", "chandler@bing.com");

		// Save the student objects
		System.out.println("Saving the students....");
		studentDAO.save(std1);
		studentDAO.save(std2);
		studentDAO.save(std3);

		// Display ids of the saved students
		System.out.println("Student saved. ID of the student: " + std1.getId());
		System.out.println("Student saved. ID of the student: " + std2.getId());
		System.out.println("Student saved. ID of the student: " + std3.getId());
	}

	private void createStudent(StudentDAO studentDAO) {
		// Create the student object
		System.out.println("Creating a new student object....");
		Student std1 = new Student("John", "Doe", "john@doe.com");


		// Save the student object
		System.out.println("Saving the student....");
		studentDAO.save(std1);

		// Display id of the saved student
		System.out.println("Student saved. ID of the student: " + std1.getId());
	}
}
