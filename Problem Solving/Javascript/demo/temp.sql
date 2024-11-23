1. I have these 3 tables in relation. I want to get the second highest salary of the persons living in Gujarat state in SQL

table1 —> id, name, salary
table2 —> id, t1_id, address
table3 —> id t2_id, state

Solution:

-- SELECT MAX(salary) FROM table1 WHERE salary < (SELECT MAX(salary) FROM table1 INNER JOIN table3 ON table1.id == table3.id WHERE table3.state = "");

SELECT MAX(salary) AS second_highest_salary
FROM table1 t1
JOIN table2 t2 ON t1.id == t2.t1_id
JOIN table3 t3 ON t2.id == t3.t2_id
WHERE t3.state = 'Gujarat'
AND t1.salary < (
  SELECT MAX(salary)
  FROM table1
  JOIN table2 ON table1.id == table2.t1_id
  JOIN table3 ON table2.id == table3.t2_id
  WHERE t3.state = 'Gujarat'
)

2. Find the Employee(s) with the Highest Salary in Each Department
Description: Suppose you have an employees table with columns id, name, salary, and department_id. The goal is to find the employee(s) with the highest salary in each department.

Solution: 

-- SELECT MAX(salary), designation FROM employees GROUP BY designation;

SELECT name, designation, salary
FROM employees
WHERE (designation, salary) IN (
  SELECT designation, MAX(salary)
  FROM employees
  GROUP BY designation
)
