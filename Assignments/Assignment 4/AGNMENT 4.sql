create database DATABASEPROFILEprofile;
CREATE TABLE tblprofile (
    ProfileID INT NOT NULL AUTO_INCREMENT,
    PName VARCHAR(50),
    gender VARCHAR(50),
    Religion VARCHAR(50),
    Caste VARCHAR(50),
    City VARCHAR(50),
    MobileNo INT,
    EmailID VARCHAR(50),
    LoginPassword VARCHAR(50),
    PRIMARY KEY (ProfileID)
);

INSERT INTO `DATABASEPROFILE`.`tblprofile`(`PName`,`Gender`,`Religion`,`Caste`,`City`,`MobileNo`,`EmailID`,`LoginPassword`)
VALUES
('A	','Male','QWE','IN','Kochi',12345,'AAA','aaa111'),
('B','Female','AHJ','BB','Trivandrum',12347,'BB','bbb111'),
('C','Female','QWE','CCC','Calicut',12349,'CCC','ccc222'),
('D','Male','ZRK',	'DDD',	'Kannur',12351,'DDD','ddd333'),
('E','Male','AHJ','IN',	'Kochi',12353,'EEE','eee444'),
('F','Female','QWE','FFF','Trivandrum',12355,'FFF','fff555'),
('G','Female','ZRK','IN','Kochi',12357,'GGG','ggg666');


select Caste,PName from tblprofile order by Caste ;

               

update tblprofile set city='Kollam' where ProfileID=5;

SELECT 
    PName, City
FROM
    tblprofile
WHERE
    City = 'Kochi';

SELECT 
    gender, PName
FROM
    tblprofile
WHERE
    gender = 'male' 
UNION SELECT 
    gender, PName
FROM
    tblprofile
WHERE
    gender = 'female';
    
    
update tblprofile set City='Calicut' where City='Kannur';


select PName,gender,Religion from tblprofile order by gender;


select PName,gender,Religion from tblprofile where City='Kochi';
