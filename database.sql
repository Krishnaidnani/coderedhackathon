CREATE DATABASE recycle;
use recycle;
CREATE TABLE Login(
Name int(100),
Email varchar(100),
Password varchar(100),
PhoneNumber varchar(100),
location varchar(500)
);

CREATE TABLE incentives(
id int(100),
Name varchar(100),
Phone_Number varchar(100),
coins varchar(100),
weight varchar(100)
);
 ALTER TABLE Login MODIFY COLUMN Name varchar(100);
  ALTER TABLE Login add COLUMN id int(100) auto_increment PRIMARY KEY;
    ALTER TABLE incentives add foreign key(id) references Login(id);
select * from Login;
select * from incentives;
set sql_safe_updates=0;
delete from login;
set sql_safe_updates=1;
truncate incentives;
