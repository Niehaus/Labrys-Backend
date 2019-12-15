CREATE DATABASE  IF NOT EXISTS `labrys` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `labrys`;
-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: labrys
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tipo_ajuda`
--

DROP TABLE IF EXISTS `tipo_ajuda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipo_ajuda` (
  `idtipo_ajuda` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_da_ajuda` varchar(45) NOT NULL,
  `descr_funcionamento` varchar(2000) NOT NULL,
  PRIMARY KEY (`idtipo_ajuda`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_ajuda`
--

LOCK TABLES `tipo_ajuda` WRITE;
/*!40000 ALTER TABLE `tipo_ajuda` DISABLE KEYS */;
INSERT INTO `tipo_ajuda` VALUES (1,'psico','funciono assim333'),(4,'psico2232','blablabla'),(5,'psico2232','blablabla'),(6,'psico2232','blablabla'),(7,'psico2232','blablabla'),(8,'psico2232','blablabla'),(9,'psico2232','blablabla'),(10,'psico2232','blablabla'),(11,'psico2232','blablabla'),(12,'psico2232','blablabla'),(13,'psico2232','blablabla'),(14,'psico2232','blablabla'),(15,'psico2232','blablabla'),(16,'psico2232','blablabla'),(17,'psico2232','blablabla'),(19,'psico','blablabla'),(20,'psico2','blablabla2'),(21,'abrigo','fdada'),(22,'pscio','fdaa'),(23,'fdsa','12321'),(24,'psicologo','feaufuafhueahuafeuhfeuah'),(25,'123','fdsafa');
/*!40000 ALTER TABLE `tipo_ajuda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-15 18:02:20
