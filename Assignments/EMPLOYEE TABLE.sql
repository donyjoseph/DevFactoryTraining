CREATE schema employees;
CREATE TABLE EMPTBL(
EMPID INT NOT NULL AUTO_INCREMENT,
FIRSTNAME VARCHAR(50),
LASTNAME VARCHAR(50),
EMAIL  VARCHAR(50),
AGE INT,
JOBTITILE VARCHAR(50),
empStarted DATE  ,
PRIMARY KEY(EMPID)
);
INSERT INTO  EMPTBL(FIRSTNAME ,LASTNAME, EMAIL ,AGE ,JOBTITILE, empStarted )
VALUES  ('Diane','William','dwilliam@gmail.com',40,'Sale manager','2013-01-31'),
('Murphy','Jain','mjain@gmail.com',	50	,'Sale manager','2015-06-15'),
('Jeff','Loui',	'jloui@gmail.com',	null,	'Sales rep','2016-05-08'),
('Bondur',	'Steve','bsteve@gmail.com',	35,'Sales rep','2018-09-01'),
('Bow','Gerad','bgerad@gmail.com',	36,'Sales rep',	'2020-07-01'),
('Jennings','Pamela','jpamela@gmail.com',33	,'Sales rep','2015-09-24'),
('Firelli',	'Julie','fjulie@gmail.com',	35,'Sales rep','2021-02-24'),
('Peterson','George','pgeorge@gmail.com',34	,'Marketing','2016-07-15'),
('Hemandez','Lesile','hlesile@gmail.com',null,'Marketing','2016-04-15'),
('Tseng;','Mary','tmary@gmail.com',	30	,'Marketing',	'2018-04-15');

SELECT 
    EMPID, FIRSTNAME, LASTNAME
FROM
    EMPTBL
ORDER BY EMPID DESC
LIMIT 3;

  

SELECT 
    EMPID,
    FIRSTNAME,
    LASTNAME,
    AGE,
    CASE
        WHEN AGE > 35 THEN 'AGE is greater than 35'
        WHEN AGE IS NULL THEN 'No AGE enterd'
        ELSE 'AGE less than or equal to 35'
    END AS message
FROM
 EMPTBL
ORDER BY age DESC;

	SELECT 
    EMPID, FIRSTNAME, AGE
FROM
       EMPTBL
WHERE
    AGE IS NULL;
