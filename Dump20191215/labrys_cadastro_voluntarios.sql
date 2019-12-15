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
-- Table structure for table `cadastro_voluntarios`
--

DROP TABLE IF EXISTS `cadastro_voluntarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cadastro_voluntarios` (
  `idcadastro_voluntario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `tipo_ajuda` int(11) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `rede_social` int(11) NOT NULL,
  PRIMARY KEY (`idcadastro_voluntario`),
  KEY `cadastro_rede_social_idx` (`rede_social`),
  KEY `cadastro_tipo_ajuda_idx` (`tipo_ajuda`),
  CONSTRAINT `cadastro_rede_social` FOREIGN KEY (`rede_social`) REFERENCES `rede_social` (`idrede_social`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cadastro_tipo_ajuda` FOREIGN KEY (`tipo_ajuda`) REFERENCES `tipo_ajuda` (`idtipo_ajuda`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_voluntarios`
--

LOCK TABLES `cadastro_voluntarios` WRITE;
/*!40000 ALTER TABLE `cadastro_voluntarios` DISABLE KEYS */;
INSERT INTO `cadastro_voluntarios` VALUES (16,'barbara',1,'3333',1),(30,'dezaine',20,'2424',9),(31,'barbs',21,'2332',10),(32,'larissa',22,'33',11),(33,'belovend',23,'f321',12),(34,'Rhayssa Jennipher Souza dos Santos',24,'30912092',13),(35,'aa',25,'fdsaf',14);
/*!40000 ALTER TABLE `cadastro_voluntarios` ENABLE KEYS */;
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
