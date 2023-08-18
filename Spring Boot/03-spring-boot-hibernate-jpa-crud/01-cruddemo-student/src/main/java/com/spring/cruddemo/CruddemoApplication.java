package com.spring.cruddemo;

import com.spring.cruddemo.dao.StudentDAO;
import com.spring.cruddemo.entity.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

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
//			findStudent(studentDAO);
//			queryForStudents(studentDAO);
//			queryForStudentsByLastName(studentDAO);
//			updateStudent(studentDAO);
//			deleteStudent(studentDAO);
			deleteAllStudents(studentDAO);
		};
	}

	private void deleteAllStudents(StudentDAO studentDAO) {
		System.out.println("Deleting all students from the database...");
		studentDAO.deleteAll();
		System.out.println("Deleted");
	}

	private void deleteStudent(StudentDAO studentDAO) {
		Integer studentId = 1;
		System.out.println("Deleting student with ID = " + studentId);
		studentDAO.delete(studentId);
		System.out.println("Student deleted");
	}

	private void updateStudent(StudentDAO studentDAO) {
		// Retrieve the student
		int studentId = 1;
		System.out.println("Getting student with ID = " + studentId);
		Student myStudent = studentDAO.findById(studentId);

		// Change firstName
		System.out.println("Updating student...");
		myStudent.setFirstName("Rony");

		// Update the student
		studentDAO.update(myStudent);

		// Display the updated student
		myStudent = studentDAO.findById(studentId);
		System.out.println("The updated student: " + myStudent);
	}

	private void queryForStudentsByLastName(StudentDAO studentDAO) {
		// Get the list of students
		List<Student> allStudents = studentDAO.findByLastName("Doe");

		// Display the list of students
		for (Student student: allStudents){
			System.out.println(student);
		}
	}

	private void queryForStudents(StudentDAO studentDAO) {
		// Get the list of students
		List<Student> allStudents = studentDAO.findAll();

		// Display the list of students
		for (Student student: allStudents){
			System.out.println(student);
		}
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
