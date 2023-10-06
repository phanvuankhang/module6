-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: wibu_shop
-- ------------------------------------------------------
-- Server version	8.0.32

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

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(250) NOT NULL,
  `birthday` varchar(255) NOT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(250) NOT NULL,
  `gender` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT b'0',
  `name` varchar(100) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `update_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_rfbvkrffamfql7cjmen8v976v` (`email`),
  KEY `FKrh1g1a20omjmn6kurd35o3eit` (`user_id`),
  CONSTRAINT `FKrh1g1a20omjmn6kurd35o3eit` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Ngũ Hành Sơn, Đà Nẵng','04/02/1998','1970-01-01 00:00:00','phanvuankhang@gmail.com',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnj5IznAUFRH31G7H8NfXE5QX2ombvKTBkZA&usqp=CAU',_binary '\0','Phan Vũ An Khang','0123456789','2023-09-08 15:06:05',2),(8,'Đà Nẵng','2023-09-19','2023-09-20 08:53:08','minh@gmail.com',1,NULL,_binary '\0','Đỗ Thành Nhân','905056546','2023-09-20 08:53:08',14);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` text NOT NULL,
  `product_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKghwsjbjo7mg3iufxruvq6iu3q` (`product_id`),
  CONSTRAINT `FKghwsjbjo7mg3iufxruvq6iu3q` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4311188190383-41290877dccfccf7e97568a0cec76484-1683014356351.jpg?v=1683014360023',1),(2,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4311188110081-af363b5a7c78ec9a10fff50b8d596907.jpg?v=1683014844623',1),(3,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4311188154672-5a7771052682966ba843196258bc503f.jpg?v=1683014846153',1),(4,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4173966523906-d56664abf937e58193651e9abf1cc1ec.jpg?v=1678595610520',2),(5,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4173966459585-86f8a79d63806216117735c3f181468a.jpg?v=1678595610520',2),(6,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4173966476387-2871ee52c702bba39cf91b6f8efb377e.jpg?v=1678595610520',2),(7,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z3968611259784-c6877ad1ed33cae8d0c0e468771877b6.jpg?v=1671333935033',3),(8,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z3968611341085-88e216265cfd12fa0ecc42b16c28cd55.jpg?v=1671333935033',3),(9,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z3968611259328-8ff73d8174a5899ddd7bc69240fbb204.jpg?v=1671333935033',3),(10,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4384043730338-0e3022dbf5d142ff1bb691bc8e0a0821.jpg?v=1685288990823',4),(11,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4384043716865-88bc33cdb36653efa83e48e01d4c867d.jpg?v=1685288999863',4),(12,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4384043699895-c8ea914117a36aebda79269e4c3565f9.jpg?v=1685288999863',4),(13,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-9dd90d61-3eed-474a-8076-4e47db1cea9b.png?v=1649258566493',5),(14,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/5-e9dac336-05d1-4be7-acd5-d1e0b94b6edc.png?v=1649258566493',5),(15,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/9-19385504-3ed6-479d-84eb-94c6a9678bcc.png?v=1649258566493',5),(16,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4478180635068-6998ccc35be80dd36fe496f11c755202.jpg?v=1688232536470',6),(17,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4478180613705-2bd55e5e913247bb61526bcd827e6fa8.jpg?v=1688232541740',6),(18,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4478180596229-f8e597c8061e28dfffcb2a7ebb5818bd.jpg?v=1688232545797',6),(19,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4182923393173-faa86432699084845ab5a5a3b56719b1.jpg?v=1678898748683',7),(20,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4182923393173-faa86432699084845ab5a5a3b56719b1.jpg?v=1678898748683',7),(21,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4182923441125-7420c10e39989b5c8ac4c0329d4196ee.jpg?v=1678898748683',7),(22,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4669575470386-cbce3f15cb0d7d452c5f0bdf92f1f2c4.jpg?v=1694016372750',8),(23,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4669575390516-5aff651cdedb07c6012750f67ced9f1c.jpg?v=1694016372750',8),(24,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4669575392874-10b0ced3b3c7c93aee7fecafc7132bd0.jpg?v=1694016372750',8),(25,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z3927565212228-ba9f10a58b09a252998f3b47b817948f.jpg?v=1670042316403',9),(26,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z3927565155679-b7217077863c44fa204a26c0b9cc2a3c.jpg?v=1670042317393',9),(27,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z3927565199467-37a5fa1820d460d6aa5b25b644b351e7.jpg?v=1670042317650',9),(28,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4514768200768-89509d9a67720dd7761c708abd8fc5ef-1689431741610.jpg?v=1689431746093',10),(29,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4514768157541-78308c03d1dc5dc08472522728b1f3a6.jpg?v=1689434554657',10),(30,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4514768067981-d1456126d25afa99e2aff1ff6d000f6f.jpg?v=1689434555963',10),(31,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4274875336496-2a700e1c09d363942c11ed5d40d9219a-1681958573724.jpg?v=1681958577247',11),(32,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4274875224893-514205383cf69d55f1b4c98043c1709c.jpg?v=1681960081387',11),(33,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4274875260768-3c18dbb521a250eb891298e7be4f5176.jpg?v=1681960081387',11),(34,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z3961472920761-fc372e76a1953e6e9e84ccea4ae3e741-1671086434308.jpg?v=1671086437133',12),(35,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z3961472721244-6da0b028b020409be23c95c5b3ab08ff.jpg?v=1671089687077',12),(36,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z3961472849661-fcd845edfbfc707ba8c690d53fc4ac9e.jpg?v=1671089687613',12),(37,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4387666793378-c8adff24af2eb6d1511bc28a138a4103.jpg?v=1685375424963',13),(38,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4387667519593-597afe8e7f9986a2723706e95952c1b9.jpg?v=1685375532723',13),(39,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4387667374787-7734f0812b3e97133f83701edd7d080d.jpg?v=1685375533970',13),(41,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-3680cd93-af18-4fa0-abd2-0cee5bd8a3c2.png?v=1649237350680',14),(42,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/29-b0020a23-c515-4a15-98c4-578d4e425d7a.png?v=1649237350680',14),(43,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/20-5b320c32-89d7-424d-b6a6-953aea073167.png?v=1649237350680',14),(44,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/op54-1678453072096.png?v=1678984837587',15),(45,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4187182763085-adbf75f6c5e93e16b7ad94847abff21d.jpg?v=1678984837587',15),(46,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4187182798884-eb08b4d803e11ce9510e0c208b729861.jpg?v=1678984837587',15),(47,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4132273750076-0d656e41a651d83b5055bbdfaff80498.jpg?v=1677422713327',16),(48,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4132273825399-397de3fc7d214f3b936d16faef074280.jpg?v=1677422714407',16),(49,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4132273829968-03ee653011f9b188cff6bdd7d7e37ff0.jpg?v=1677422715780',16),(51,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4192441360674-31a338120585b010880aab0eff9acbd6.jpg?v=1679154038633',17),(52,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4192441207226-3741140f665f5132e4a027888d7774ea.jpg?v=1679154038633',17),(53,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4192441220008-2cb281522f20796920f18375dff9e851.jpg?v=1679154038633',17),(54,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4012617219038-46842e7304ce16f934c0ded535dbdf5b.jpg?v=1672931162093',18),(55,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4012617488711-10bc5c9c18d9a248df98190c4863d02e.jpg?v=1672931162093',18),(56,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4012617517577-688e828d26ad62689939a5396bde0e3a.jpg?v=1672931162093',18),(57,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z3960938216533-8686ee2c1de96ad85716f031600e650b-1671086462296.jpg?v=1671086465243',19),(58,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z3960938137992-42b03a9e471c3a5f37f61dea2a2de1d2.jpg?v=1671089875947',19),(59,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z3960938145982-6dbced28523d4a0f662320783046a9ac.jpg?v=1671089877247',19),(60,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4414390462866-7b6fff57e33ac1e57dd28becfa86da0d.jpg?v=1686285897840',20),(61,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4414390474369-b685af5eb12944a1a4ef6576d1c551e1.jpg?v=1686285901107',20),(62,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4414390444104-60bfeeac9bb1d6d0737f315b092b3613.jpg?v=1686285904137',20),(63,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4662270827210-c8c7ae355c4f9600fb9092b71d1b6684-1693845490977.jpg?v=1693845494740',21),(64,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4662270814610-377c1a5a1a5a74464eee9c51d05f59bf.jpg?v=1693883237880',21),(65,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4662270815248-f6107471be2d77230031f072dcc6a869.jpg?v=1693883239393',21),(66,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4417475461858-e972ba8240fd669f6b1b7e54d3409269.jpg?v=1686290471087',22),(67,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4417475461459-59063b15a4c7644bb1b41e84b1ce4284.jpg?v=1686290476230',22),(68,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4417475427130-d9c3743d4e94428e4261028688e95130.jpg?v=1686290479963',22),(69,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/o1cn01jwq2fc1uoi5xjdt2v-2745492508-0-cib.jpg?v=1681460378023',23),(70,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4249727203449-07fe9f2445a30543d365bbaf707a90cd-1.jpg?v=1681460380267',23),(71,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/z4249727216602-df654ddcf59d32bbb6504739633da07e-1.jpg?v=1681460381197',23),(72,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-a6d2d1ab-125e-4e17-8bd4-2514942e7e00.png?v=1651730177580',24),(73,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/14-75a461e9-5915-46e5-ab9c-cfc5a9de399d.png?v=1651730177580',24),(74,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/8-7662d046-8f7b-4c38-87e8-31a4ee80b0f5.png?v=1651730177580',24),(75,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-60af4ad7-99a6-4445-ac6f-5b86b304bc20.png?v=1651730135173',25),(76,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/14-e2747ddb-4376-4d6f-8a64-b61647089cbd.png?v=1651730135173',25),(77,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/17-c80e21f2-daab-4827-ad44-0b87c1543c61.png?v=1651730135173',25),(78,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-b4ffa0cb-af31-411a-a8dd-54bffcfc7529.png?v=1651730160597',26),(79,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/19-c0cb73e9-6f80-46fb-932d-35243e1df479.png?v=1651730160597',26),(80,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/10-cab7dc48-ad02-4663-96c6-542b83f97d31.png?v=1651730160597',26),(81,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/o1cn01nng0xc1rmhbghqavo-2013035673-0-cib-1659453272289.jpg?v=1659453279193',27),(82,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/04.jpg?v=1659453650073',27),(83,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/05.jpg?v=1659453650640',27),(84,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/o1cn01htawrz1bs2jbkmbka-0-0-cib.jpg?v=1660299457837',28),(85,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/gqhre-1658310473849.jpg?v=1660299457837',28),(86,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/h99067b777f04426284b3ed2d27913f75s.jpg?v=1660299457837',28),(87,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-8a4fd19c-e1bc-459b-90d9-e934cd7a1b04.png?v=1649836715810',29),(88,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/8-3315b591-57c6-49c5-8a5a-f9ce9bb3d306.png?v=1649836715810',29),(89,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/10-1325fb31-3b2e-44e5-8ce8-0de3e602ac99.png?v=1649836715810',29),(90,'https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/06-1665998939724.jpg?v=1666947404160',30),(91,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/o1cn01se7fhg1rmhfblodmq-2013035673-0-cib.jpg?v=1666947404160',30),(92,'https://bizweb.dktcdn.net/thumb/1024x1024/100/418/981/products/o1cn017ori2l1toqfluben6-2212467552372-0-cib.jpg?v=1666947404160',30);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_detail` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `is_delete` bit(1) DEFAULT b'0',
  `price` bigint NOT NULL,
  `quantity` int NOT NULL,
  `update_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `orders_id` bigint DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7xf2gmq3yok90kilflnu8aa7e` (`orders_id`),
  KEY `FKc7q42e9tu0hslx6w4wxgomhvn` (`product_id`),
  CONSTRAINT `FK7xf2gmq3yok90kilflnu8aa7e` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `FKc7q42e9tu0hslx6w4wxgomhvn` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_detail`
--

LOCK TABLES `order_detail` WRITE;
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
INSERT INTO `order_detail` VALUES (1,'2023-09-21 10:53:27',_binary '\0',490000,2,'2023-09-21 10:53:27',1,30),(2,'2023-09-21 10:53:27',_binary '\0',740000,4,'2023-09-21 10:53:27',1,29),(3,'2023-09-22 11:47:48',_binary '\0',370000,2,'2023-09-22 11:47:48',2,29),(4,'2023-09-22 11:47:48',_binary '\0',681000,3,'2023-09-22 11:47:48',2,28),(5,'2023-09-22 11:47:48',_binary '\0',1225000,5,'2023-09-22 11:47:48',2,30);
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `total_price` double DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpxtb8awmi0dk6smoh2vp1litg` (`customer_id`),
  CONSTRAINT `FKpxtb8awmi0dk6smoh2vp1litg` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'OD--55567','2023-09-21 10:53:27',1230000,1),(2,'OD-7165','2023-09-22 11:47:48',2276000,1);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_type`
--

DROP TABLE IF EXISTS `product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_type` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
INSERT INTO `product_type` VALUES (1,'Naruto'),(2,'One piece'),(3,'Dragon Ball');
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(1000) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT b'0',
  `name` varchar(150) NOT NULL,
  `price` bigint NOT NULL,
  `quantity` int NOT NULL,
  `update_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `product_type_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK923dhs733rpoelp2tls2ful1` (`product_type_id`),
  CONSTRAINT `FK923dhs733rpoelp2tls2ful1` FOREIGN KEY (`product_type_id`) REFERENCES `product_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'2023-09-21 08:54:24','✅Chiếu Cao :54cm\n\n-✅Trọng Lượng ~ 7kg\n\n-✅Phụ kiện đi kèm : râu + tháp + tay nam châm\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Full Box + Có Hộp Đẹp\n\n-✅ Nhân vật : RỒNG YOYO\n\n-✅FIGURE ANIME  : MÔ HÌNH DRAGON BALL , 7 VIÊN NGỌC RỒNG','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4311188190383-41290877dccfccf7e97568a0cec76484-1683014356351.jpg?v=1683014360023',_binary '\0','Mô Hình Rồng YOYO cao cấp có led ở base + mắt ( khớp nam châm )',1236000,100,'2023-09-21 08:54:24',3),(2,'2023-09-21 08:56:10','✅Chiếu Cao :43cm\n\n-✅Trọng Lượng ~ 6500 Gram \n\n-✅Phụ kiện đi kèm : Không\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Full Box + Có Hộp Đẹp\n\n-✅ Nhân vật : SONGOKU\n\n-✅FIGURE ANIME  : MÔ HÌNH DRAGON BALL , 7 VIÊN NGỌC RỒNG','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4173966523906-d56664abf937e58193651e9abf1cc1ec.jpg?v=1678595610520',_binary '\0','Mô hình DragonBall SonGoku SSJ4',899000,100,'2023-09-21 08:56:10',3),(3,'2023-09-21 08:57:37','✅Chiếu Cao : 58cm\n\n-✅Trọng Lượng : 4000Gram\n\n-✅Phụ kiện đi kèm :  2 đầu + 1 bán thân\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có Hộp màu\n\n-✅ Nhân vật : VEGITO\n\n-✅FIGURE ANIME  : OnePiece','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z3968611259784-c6877ad1ed33cae8d0c0e468771877b6.jpg?v=1671333935033',_binary '\0','Mô Hình DragonBall Vegito siêu phẩm tặng kèm 1 bán thân',795000,100,'2023-09-21 08:57:37',3),(4,'2023-09-21 08:59:37','✅Chiếu Cao : 50cm\n\n-✅Trọng Lượng : 4200Gram\n\n-✅Phụ kiện đi kèm :  Không\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có Hộp màu\n\n-✅ Nhân vật : SONGOKU\n\n-✅FIGURE ANIME  : DragonBall','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4384043730338-0e3022dbf5d142ff1bb691bc8e0a0821.jpg?v=1685288990823',_binary '\0','Mô Hình DragonBall Songoku Black có led',759000,100,'2023-09-21 08:59:37',3),(5,'2023-09-21 09:01:22','✅Chiếu Cao : 36cm \n\n-✅Trọng Lượng ~ 4000 Gram \n\n-✅Phụ kiện đi kèm : 4 cái sừng\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Boc Túi OPP Có Hộp Đẹp\n\n-✅ Nhân vật : RỒNG NEMEK','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-9dd90d61-3eed-474a-8076-4e47db1cea9b.png?v=1649258566493',_binary '\0','Mô hình Rồng Nemek',668000,100,'2023-09-21 09:01:22',3),(6,'2023-09-21 09:03:23','✅Chiếu Cao : 31cm\n\n-✅Trọng Lượng : 3400Gram\n\n-✅Phụ kiện đi kèm :  có\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có hộp đẹp\n\n-✅ Nhân vật : Frieza\n\n-✅FIGURE ANIME  : DragonBall','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4478180635068-6998ccc35be80dd36fe496f11c755202.jpg?v=1688232536470',_binary '\0','Mô Hình DragonBall Frieza fom 4 chiến đấu Tại Namek',2115000,100,'2023-09-21 09:03:23',3),(7,'2023-09-21 09:05:10','✅Chiếu Cao :6-10 cam tuỳ nhân vật\n\n-✅Trọng Lượng ~ 1000 Gram \n\n-✅Phụ kiện đi kèm : Không\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Full Box - Có Hộp Đẹp\n\n-✅ Nhân vật : Tiểu đội sát thủ\n\n-✅FIGURE ANIME  : MÔ HÌNH DRAGON BALL , 7 VIÊN NGỌC RỒNG','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4182923360020-1c71bf44d42625a467367c1f383e4223.jpg?v=1678898748683',_binary '\0','Mô hình DragonBall Tiểu đội sát thủ (đội quân Frieza)',399000,100,'2023-09-21 09:05:10',3),(8,'2023-09-21 09:07:51','✅Chiếu Cao : 21cm\n\n-✅Trọng Lượng : 1300Gram\n\n-✅Phụ kiện đi kèm :  Không\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có hộp đẹp\n\n-✅ Nhân vật : Songoku\n\n-✅FIGURE ANIME  : DragonBall','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4669575470386-cbce3f15cb0d7d452c5f0bdf92f1f2c4.jpg?v=1694016372750',_binary '\0','Mô Hình DragonBall Songoku Kid lái xe',309000,100,'2023-09-21 09:07:51',3),(9,'2023-09-21 09:09:17','✅Chiếu Cao : 21cm\n\n-✅Trọng Lượng : 800Gram\n\n-✅Phụ kiện đi kèm :  Không\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có hộp đẹp\n\n-✅ Nhân vật : MABU\n\n-✅FIGURE ANIME  : DragonBall','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z3927565212228-ba9f10a58b09a252998f3b47b817948f.jpg?v=1670042316403',_binary '\0','Mô Hình DragonBall MaBu chiến đấu siêu ngầu',289000,100,'2023-09-21 09:09:17',3),(10,'2023-09-21 09:12:08','✅Chiếu Cao : 18cm\n\n-✅Trọng Lượng : 500Gram\n\n-✅Phụ kiện đi kèm :  có\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có hộp đẹp\n\n-✅ Nhân vật : KRILIN\n\n-✅FIGURE ANIME  : DragonBall','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4514768200768-89509d9a67720dd7761c708abd8fc5ef-1689431741610.jpg?v=1689431746093',_binary '\0','Mô Hình DragonBall Earth Krillin sử dụng Lưỡi Cưa Khí',180000,100,'2023-09-21 09:12:08',3),(11,'2023-09-21 09:14:09','✅Chiếu Cao : 48cm\n\n-✅Trọng Lượng ~ 7000Gram \n\n-✅Phụ kiện đi kèm : Không\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Full box - Có Hộp đẹp\n\n-✅ Nhân vật : MONKEY D.LUFFY\n\n-✅FIGURE ANIME  : ONE PIECE','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4274875336496-2a700e1c09d363942c11ed5d40d9219a-1681958573724.jpg?v=1681958577247',_binary '\0','Mô hình OnePiece Luffy và các bại tướng hàng siêu chất',2115000,100,'2023-09-21 09:14:09',2),(12,'2023-09-21 09:16:43','✅Chiếu Cao : 45cm\n\n-✅Trọng Lượng : 3500Gram\n\n-✅Phụ kiện đi kèm :  Không\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có Hộp màu\n\n-✅ Nhân vật : LUFFY\n\n-✅FIGURE ANIME  : OnePiece','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z3961472920761-fc372e76a1953e6e9e84ccea4ae3e741-1671086434308.jpg?v=1671086437133',_binary '\0','Mô Hình OnePiece Luffy wano siêu phẩm',1200000,100,'2023-09-21 09:16:43',2),(13,'2023-09-21 09:17:52','✅Chiếu Cao : 44cm\n\n-✅Trọng Lượng : 1500Gram\n\n-✅Phụ kiện đi kèm :  dây quấn đùi\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có Hộp màu\n\n-✅ Nhân vật : NAMI\n\n-✅FIGURE ANIME  : OnePiece','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4387666793378-c8adff24af2eb6d1511bc28a138a4103.jpg?v=1685375424963',_binary '\0','Mô Hình OnePiece Nami dáng đứng siêu quyến rũ',1095000,100,'2023-09-21 09:17:52',2),(14,'2023-09-21 09:22:55','✅Chiếu Cao : 32 cm\n\n-✅Trọng Lượng ~ 3kg\n\n-✅Phụ kiện đi kèm :  2 tay thay thế \n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có Box đi kèm , box đẹp chắc chắn\n\n-✅ Nhân vật : LAW\n\n-✅FIGURE ANIME  : ONE PIECE','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-3680cd93-af18-4fa0-abd2-0cee5bd8a3c2.png?v=1649237350680',_binary '\0','Siêu Phẩm Mô hình Law chiến đấu',793000,100,'2023-09-21 09:22:55',2),(15,'2023-09-21 09:22:55','✅Chiếu Cao : 31cm\n\n-✅Trọng Lượng : 3000Gram\n\n-✅Phụ kiện đi kèm :  3 kiếm + haki\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có Hộp carton\n\n-✅ Nhân vật : ZORO\n\n-✅FIGURE ANIME  : OnePiece','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/op54-1678453072096.png?v=1678984837587',_binary '\0','Mô Hình OnePiece Zoro wano hiệu ứng siêu đẹp ',739000,100,'2023-09-21 09:22:55',2),(16,'2023-09-21 09:22:55','✅Chiếu Cao : 39cm\n\n-✅Trọng Lượng : 2700Gram\n\n-✅Phụ kiện đi kèm :  Không\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Full box\n\n-✅ Nhân vật :KUZAN\n\n-✅FIGURE ANIME  : ONE PIECE','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4132273750076-0d656e41a651d83b5055bbdfaff80498.jpg?v=1677422713327',_binary '\0','Mô Hình OnePiece Kuzan trạng thái chiến đấu siêu đẹp',569000,100,'2023-09-21 09:22:55',2),(17,'2023-09-21 09:28:53','✅Chiếu Cao : 34cm \n\n-✅Trọng Lượng ~ 1800 Gram\n\n-✅Phụ kiện đi kèm : Không \n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Full box , Hộp đẹp , chắc chắn\n\n-✅ Nhân vật : NICO ROBIN\n\n-✅FIGURE ANIME  : ONE PIECE','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4192441360674-31a338120585b010880aab0eff9acbd6.jpg?v=1679154038633',_binary '\0','Mô hình OnePiece Nico Robin wano siêu đẹp',559000,100,'2023-09-21 09:28:53',2),(18,'2023-09-21 09:28:53','✅Chiếu Cao : 48cm\n\n-✅Trọng Lượng : 2200Gram\n\n-✅Phụ kiện đi kèm :  1 đầu\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có Hộp Carton\n\n-✅ Nhân vật : Doflamingo\n\n-✅FIGURE ANIME  : OnePiece','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4012617219038-46842e7304ce16f934c0ded535dbdf5b.jpg?v=1672931162093',_binary '\0','Mô Hình OnePiece Doflamingo dáng đứng kiêu hãnh',535000,100,'2023-09-21 09:28:53',2),(19,'2023-09-21 09:28:53','✅Chiếu Cao : 47cm\n\n-✅Trọng Lượng : 3000Gram\n\n-✅Phụ kiện đi kèm :  Không\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có Hộp màu\n\n-✅ Nhân vật : Enel\n\n-✅FIGURE ANIME  : OnePiece','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z3960938216533-8686ee2c1de96ad85716f031600e650b-1671086462296.jpg?v=1671086465243',_binary '\0','Mô Hình One Piece Enel Chúa Trời siêu phẩm',495000,100,'2023-09-21 09:28:53',2),(20,'2023-09-21 09:28:53','✅Chiếu Cao : 32cm\n\n-✅Trọng Lượng : 500Gram\n\n-✅Phụ kiện đi kèm :  rương vàng\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Có Hộp màu\n\n-✅ Nhân vật : NAMI\n\n-✅FIGURE ANIME  : OnePiece','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4414390462866-7b6fff57e33ac1e57dd28becfa86da0d.jpg?v=1686285897840',_binary '\0','Mô Hình OnePiece Nami vá Zeus trạng thái chiến đấu siêu đẹp',175000,100,'2023-09-21 09:28:53',2),(21,'2023-09-21 09:33:06','✅Chiếu Cao : 50cm \n\n-✅Trọng Lượng : 5000gram \n\n-✅Phụ kiện đi kèm : không \n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Full box , Hộp đẹp chắc chắn\n\n-✅ Nhân vật : NARUTO\n\n-✅FIGURE ANIME MANGA : NARUTO','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4662270827210-c8c7ae355c4f9600fb9092b71d1b6684-1693845490977.jpg?v=1693845494740',_binary '\0','Mô hình Bán thân Naruto tỉ lệ 1:1',1969000,100,'2023-09-21 09:33:06',1),(22,'2023-09-21 09:33:06','✅Chiếu Cao : 40cm \n\n-✅Trọng Lượng : 1800gram \n\n-✅Phụ kiện đi kèm : gậy cầm tay\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Full box , Hộp đẹp chắc chắn\n\n-✅ Nhân vật : NARUTO\n\n-✅FIGURE ANIME MANGA : NARUTO','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/z4417475461858-e972ba8240fd669f6b1b7e54d3409269.jpg?v=1686290471087',_binary '\0','Mô hình Naruto Lục Đạo dáng đứng siêu ngầu có led ở base',426000,100,'2023-09-21 09:33:06',1),(23,'2023-09-21 09:33:06','✅Chiếu Cao : 40cm\n\n-✅Trọng Lượng ~  2.5 kg\n\n-✅Phụ kiện đi kèm :  đầu thay thế + quạ\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : FULL BOX , hộp đẹp chắc chắn\n\n-✅ Nhân vật : UCHIHA ITACHI\n\n-✅FIGURE ANIME MANGA : NARUTO','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/o1cn01jwq2fc1uoi5xjdt2v-2745492508-0-cib.jpg?v=1681460378023',_binary '\0','Mô hình Naruto Itachi Akatsuki đế Hắc Hỏa có quạ + 2 đầu thay thế',419000,100,'2023-09-21 09:33:06',1),(24,'2023-09-21 09:34:30','✅Chiếu Cao : 28cm\n\n-✅Trọng Lượng : 1100gram\n\n-✅Phụ kiện đi kèm :  Không\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : FULL BOX , hộp đẹp chắc chắn\n\n-✅ Nhân vật : ĐỆ NGŨ\n\n-✅FIGURE ANIME MANGA : NARUTO','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-a6d2d1ab-125e-4e17-8bd4-2514942e7e00.png?v=1651730177580',_binary '\0','Mô hình Đệ Ngũ Senju Tsunade',317000,100,'2023-09-21 09:34:30',1),(25,'2023-09-21 09:35:58','✅Chiếu Cao : 28cm\n\n-✅Trọng Lượng : 1100gram\n\n-✅Phụ kiện đi kèm : Không\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : FULL BOX , hộp đẹp chắc chắn\n\n-✅ Nhân vật : ĐỆ TAM\n\n-✅FIGURE ANIME MANGA : NARUTO','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-60af4ad7-99a6-4445-ac6f-5b86b304bc20.png?v=1651730135173',_binary '\0','Mô hình Đệ Tam Senju Hashirama',317000,100,'2023-09-21 09:35:58',1),(26,'2023-09-21 09:37:32','✅Chiếu Cao : 28cm\n\n-✅Trọng Lượng : 1100gram\n\n-✅Phụ kiện đi kèm :  1 phi tiêu cầm tay\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : FULL BOX , hộp đẹp chắc chắn\n\n-✅ Nhân vật : ĐỆ TỨ\n\n-✅FIGURE ANIME MANGA : NARUTO','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-b4ffa0cb-af31-411a-a8dd-54bffcfc7529.png?v=1651730160597',_binary '\0','Mô hình Đệ Tứ Namikaze Minato',317000,100,'2023-09-21 09:37:32',1),(27,'2023-09-21 09:38:47','✅Chiếu Cao : 16cm \n\n-✅Trọng Lượng : 1,6 kg \n\n-✅Phụ kiện đi kèm :không \n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Full box , hộp đẹp chắc chắn \n\n-✅ Nhân vật : Cửu vĩ Kurama\n\n-✅FIGURE ANIME MANGA : NARUTO','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/o1cn01nng0xc1rmhbghqavo-2013035673-0-cib-1659453272289.jpg?v=1659453279193',_binary '\0','Mô Hình Cữu Vĩ Kurama',305000,100,'2023-09-21 09:38:47',1),(28,'2023-09-21 09:40:23','✅Chiếu Cao : 38cm\n\n-✅Trọng Lượng : 100gram\n\n-✅Phụ kiện đi kèm :  gậy cầm tay\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : FULL BOX , hộp đẹp chắc chắn\n\n-✅ Nhân vật : MADARA\n\n-✅FIGURE ANIME MANGA : NARUTO','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/o1cn01htawrz1bs2jbkmbka-0-0-cib.jpg?v=1660299457837',_binary '\0','Mô hình Uchiha Madara',227000,97,'2023-09-22 11:47:48',1),(29,'2023-09-21 09:43:13','✅Chiếu Cao : 20cm\n\n-✅Trọng Lượng : 1 kg \n\n-✅Phụ kiện đi kèm : Không\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : full box , hộp đẹp chắc chắn\n\n-✅ Nhân vật : NARUTO\n\n-✅FIGURE ANIME MANGA : NARUTO','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/2-8a4fd19c-e1bc-459b-90d9-e934cd7a1b04.png?v=1649836715810',_binary '\0','Mô hình cửu vỹ jinchuriki siêu đẹp',185000,98,'2023-09-22 11:47:48',1),(30,'2023-09-21 09:43:13','✅Chiếu Cao : 32cm \n\n-✅Trọng Lượng : 910 Gram \n\n-✅Phụ kiện đi kèm : Vũ Khí\n\n-✅Chất liệu : Nhựa PVC cao cấp \n\n-✅Vỏ hộp kèm sản phẩm : Hộp màu\n\n-✅ Nhân vật : NARUTO\n\n-✅FIGURE ANIME MANGA : NARUTO','https://bizweb.dktcdn.net/thumb/grande/100/418/981/products/06-1665998939724.jpg?v=1666947404160',_binary '\0','Mô hình Naruto Hiền Nhân trạng thái chiến đấu',245000,0,'2023-09-22 11:47:48',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_ADMIN'),(2,'ROLE_CUSTOMER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_cart`
--

DROP TABLE IF EXISTS `shopping_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_cart` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `price` bigint NOT NULL,
  `quantity` int NOT NULL,
  `customer_id` bigint DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK64hllmf43h6bixdqdyjfyl66c` (`customer_id`),
  KEY `FK26ajdolmyw3a95bhn6pjk5dor` (`product_id`),
  CONSTRAINT `FK26ajdolmyw3a95bhn6pjk5dor` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FK64hllmf43h6bixdqdyjfyl66c` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_cart`
--

LOCK TABLES `shopping_cart` WRITE;
/*!40000 ALTER TABLE `shopping_cart` DISABLE KEYS */;
INSERT INTO `shopping_cart` VALUES (11,1110000,6,1,29),(12,1135000,5,1,28);
/*!40000 ALTER TABLE `shopping_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` text NOT NULL,
  `username` varchar(100) NOT NULL,
  `verify_code` varchar(5) DEFAULT NULL,
  `role_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_r43af9ap4edm43mmtq01oddj6` (`username`),
  KEY `FKp56c1712k691lhsyewcssf40f` (`role_id`),
  CONSTRAINT `FKp56c1712k691lhsyewcssf40f` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'$2a$12$/9o/kfC5jZG.Feb.LHdjZuVK1gdhERhSXgNwtAThi0zAIAbuoJh8m','admin','12345',1),(2,'$2a$12$/9o/kfC5jZG.Feb.LHdjZuVK1gdhERhSXgNwtAThi0zAIAbuoJh8m','ankhang','12345',2),(14,'$2a$10$xNcGrvB11dXpM0Kzf4tlxeOtBTZby0MrEk0UKpNCA0/ezTMgaUGXi','thanhnhan',NULL,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06 11:52:21
