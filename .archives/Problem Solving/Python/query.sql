select * from 'Employee' where first_name = 'john';

create table Customers (
  ID int not null auto_increment,
  firstName varchar(255) not null,
  Age int check (Age >= 18)
  City varchar(20) default 'Mumbai'
);

select o.order_id, c.customer_id
from order o inner join customers c
on o.customer_id = c.customer_id;

select max(Age) from Customers where Age not in (select max(Age) from Customers);

select top 11th Age

select max(Age) from Customers where Age not in (select distinct Age from Customers LIMIT 10 order by Age DESC)

