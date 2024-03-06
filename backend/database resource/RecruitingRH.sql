-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: recruitingrh
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP SCHEMA IF EXISTS `RecruitingRH` ;

CREATE SCHEMA IF NOT EXISTS `RecruitingRH` DEFAULT CHARACTER SET utf8 ;
USE `RecruitingRH` ;

--
-- Table structure for table `applicants`
--

DROP TABLE IF EXISTS `applicants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applicants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `dni` varchar(8) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `sex` varchar(20) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `linkedin` varchar(255) NOT NULL,
  `birth_date` date NOT NULL,
  `image` varchar(35) DEFAULT NULL,
  `profession_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone_UNIQUE` (`phone`),
  UNIQUE KEY `dni_UNIQUE` (`dni`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `linkedin_UNIQUE` (`linkedin`),
  KEY `fk_applicants_professions_idx` (`profession_id`),
  CONSTRAINT `fk_applicants_professions` FOREIGN KEY (`profession_id`) REFERENCES `professions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicants`
--

LOCK TABLES `applicants` WRITE;
/*!40000 ALTER TABLE `applicants` DISABLE KEYS */;
INSERT INTO `applicants` VALUES (1,'Gloria','Medina','35908144','+9376743120','female','gloria@gmail.com','https://linkedin.com/gloria','1985-04-04','foto1.jpg',1),
(2,'Daniel','Fuentes','30205156','+3450612780','Male','daniel@gmail.com','https://linkedin.com/daniel','1980-02-14','foto2.jpg',7),
(3,'Tim','Tim','42508146','+8890642710','Female','tim@gmail.com','https://linkedin.com/tim','1995-04-05','foto3.jpg',9),
(4,'Rocio','Carle','40305366','+5410616784','Female','rocio@gmail.com','https://linkedin.com/rocio','1990-06-28','foto4.jpg',8),
(5,'Victor','Fuentes','43102090','+2490642520','Male','victor@gmail.com','https://linkedin.com/victor','1997-11-20','foto5.jpg',5),
(6,'Luis','Fuentes','41905459','+1430662340','Male','luis@gmail.com','https://linkedin.com/luis','1996-01-01','foto6.jpg',6);
/*!40000 ALTER TABLE `applicants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professions`
--

DROP TABLE IF EXISTS `professions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `profession_name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professions`
--

LOCK TABLES `professions` WRITE;
/*!40000 ALTER TABLE `professions` DISABLE KEYS */;
INSERT INTO `professions` VALUES (1,'Administrador'),
(2,'Abogado'),
(3,'Arquitecto'),
(4,'Botanico'),
(5,'Computista'),
(6,'Economista'),
(7,'Tecnico de sonido'),
(8,'Profesor'),
(9,'Linguista');
/*!40000 ALTER TABLE `professions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-05 18:04:03
