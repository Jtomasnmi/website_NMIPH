-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2025 at 10:00 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `networkmanagerdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `clientdetail`
--

CREATE TABLE `clientdetail` (
  `ClientDetailId` int(11) NOT NULL,
  `FirstName` varchar(100) DEFAULT NULL,
  `LastName` varchar(100) DEFAULT NULL,
  `JobDesignation` varchar(100) DEFAULT NULL,
  `CompanyName` varchar(150) DEFAULT NULL,
  `CompanyAddress` varchar(150) DEFAULT NULL,
  `EmailAddress` varchar(100) DEFAULT NULL,
  `ContactNo` varchar(30) DEFAULT NULL,
  `CreateDateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clientdetail`
--

INSERT INTO `clientdetail` (`ClientDetailId`, `FirstName`, `LastName`, `JobDesignation`, `CompanyName`, `CompanyAddress`, `EmailAddress`, `ContactNo`, `CreateDateTime`) VALUES
(7, 'Bryan', 'Llanto', 'Senior Application Developer', 'NM Network Manager Sales Inc', '7th Floor Raha Sulayman Bldg. 108 Benavidez St., Legaspi Village, Makati City', 'info@nmiph.com', '(+632) 8782-0126', NULL),
(10, 'asdsad', 'asd', 'asdsa', 'asdsa', 'asdas', 'asdas', 'asda', NULL),
(11, 'asdsad', 'asd', 'asdsa', 'asdsa', 'asdas', 'asdas', 'asda', NULL),
(12, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', NULL),
(19, 'Test', 'Test', 'Test', 'Test', 'Test', 'test@noemail.com', 'dsadsadsad', NULL),
(20, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'adsa', NULL),
(21, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(22, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'test@noemail.com', NULL),
(23, 'asd', 'ad', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(24, 'asd', 'ad', 'asd', 'adas', 'asd', 'test@noemail.com', 'asd', NULL),
(25, 'adas', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'ad', NULL),
(26, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(27, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(28, 'sadsa', 'asdsad', 'sadsad', 'asdsad', 'asdad', 'test@noemail.com', 'test', NULL),
(29, 'asda', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', '09231241234231', NULL),
(30, 'asdsad', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', '0000-00-00 00:00:00'),
(31, 'asd', 'sdsa', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', '0000-00-00 00:00:00'),
(32, 's', 'sasad', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', '2024-07-26 05:09:05'),
(33, 'asd', 'sad', 'asd', 'asd', 'asd', 'test@noemail.com', 'werwr', '0000-00-00 00:00:00'),
(34, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'test@noemail.com', '0000-00-00 00:00:00'),
(35, 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', '0000-00-00 00:00:00'),
(36, 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', '0000-00-00 00:00:00'),
(37, 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', 'test@noemail.com', NULL),
(38, 'Bryan', 'Fernandez', 'Bryan', 'Bryan', 'Bryan', 'bllanto@noemail.com', 'sad', NULL),
(39, 'asd', 'asd', 'asd', 'asd', 'as', 'test@noemail.com', 'test@noemail.com', NULL),
(40, 'test', 'test', 'test', 'test', 'test', 'test@noemail.com', 'asd', NULL),
(41, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'test', NULL),
(42, 'asd', 'ad', 'asd', 'asd', 'asd', 'test@noemail.com', 'test@noemail.com', NULL),
(43, 'adasd', 'asd', 'ad', 'asd', 'ad', 'test@noemail.com', 'asd', NULL),
(44, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(45, 'asda', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(46, 'sad', 'asdasd', 'asd', 'ads', 'asd', 'test@noemail.com', 'asd', NULL),
(47, '', '', '', '', '', '', '', NULL),
(48, '', '', '', '', '', '', '', NULL),
(49, '', '', '', '', '', '', '', NULL),
(50, '', '', '', '', '', '', '', NULL),
(51, 'asd', 'asd', 'aad', 'ad', 'dsa', 'test@noemail.com', 'asda', NULL),
(52, '', '', '', '', '', '', '', NULL),
(53, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(54, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(55, 'asdsad', 'asdas', 'asd', 'asd', 'asd', 'test@noemail.com', 'sad', NULL),
(56, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'ads', NULL),
(57, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'sad', NULL),
(58, 'asd', 'asd', 'as', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(59, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(60, 'ad', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(61, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(62, 'asda', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'ad', NULL),
(63, 'ad', 'asd', 'asd', 'asdsad', 'asd', 'test@noemail.com', 'asd', NULL),
(64, 'asd', 'asdsa', 'asd', 'asdsad', 'asd', 'test@noemail.com', 'test', NULL),
(65, 'asdsad', 'asdasd', 'asd', 'asdsad', 'asd', 'asd@noemail.com', 'asd', NULL),
(66, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(67, 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'test@noemail.com', 'asd', NULL),
(68, 'ad', 'asd', 'asd', 'asdsa', 'asd', 'test@noemail.com', 'asd', NULL),
(69, 'asda', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(70, 'asd', 'asd', 'asd', 'asd', 'asdas', 'asd@noemail.com', 'asd', NULL),
(71, 'asdsad', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(72, 'asdsad', 'asdsad', 'asd', 'asdsad', 'asdas', 'asdas@noemail.com', 'test', NULL),
(73, 'asdas', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(74, 'asda', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(75, 'asdsa', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(76, 'asdsa', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(77, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(78, 'asdsad', 'asdas', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(79, 'dsadsad', 'asdsad', 'asda', 'asdsad', 'asdsad', 'asd@noemail.com', 'asdsad', NULL),
(80, 'wqe', 'qwe', 'qwe', 'qwew', 'qwe', 'test@noemail.com', 'asd', NULL),
(81, 'test', 'asdas', 'asd', 'asd', 'asasd', 'test@noemail.com', 'test', NULL),
(82, 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'test@noemail.com', 'sad', NULL),
(83, 'wqe', 'qwe', 'asd', 'qwe', 'qwe', 'test@noemail.com', 'qwe', NULL),
(84, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'test', NULL),
(85, 'afa', 'af', 'asf', 'asf', 'asf', 'test@noemail.com', 'asf', NULL),
(86, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(87, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'sd', NULL),
(88, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(89, 'asd', 'asd', 'asd', 'asd', 'sad', 'test@noemail.com', 'asd', NULL),
(90, 'bago', 'asd', 'asda', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(91, 'bago ulit', 'bago ulit', 'bago ulit', 'bago ulit', 'bago ulit', 'asd@noemail.com', 'bago ulit', NULL),
(92, 'asdsad', 'asdad', 'asd', 'asdad', 'asd', 'test@noemail.com', 'asd', NULL),
(93, 'Sandy', 'Blaza', 'IT', 'CARD MRI INFORMATION TECHNOLOGY, INC.', 'Paulino', 'cmit@noemail.com', '09162303314', NULL),
(94, 'asd', 'asd', 'sad', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(95, 'asd', 'asd', 'sad', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(96, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(97, 'asdsa', 'asda', 'asd', 'asda', 'asd', 'asd@noemail.com', 'asd', NULL),
(98, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'ad', NULL),
(99, 'asd', 'asd', 'asd', 'asd', 'sad', 'asd@noemail.com', 'asd', NULL),
(100, 'asddad', 'asdsadsad', 'asdsadas', 'asdsad', 'asd', 'asd@noemail.com', 'asda', NULL),
(101, 'ads', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(102, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(103, 'Bryan', 'Llanto', 'Test', 'Test', 'adas', 'test@noemail.com', 'sd', NULL),
(104, 'asdsa', 'asdas', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(105, '', '', '', '', '', '', '', NULL),
(106, '', '', '', '', '', '', '', NULL),
(107, '', '', '', '', '', '', '', NULL),
(108, '', '', '', '', '', '', '', NULL),
(109, '', '', '', '', '', '', '', NULL),
(110, '', '', '', '', '', '', '', NULL),
(111, '', '', '', '', '', '', '', NULL),
(112, '', '', '', '', '', '', '', NULL),
(113, '', '', '', '', '', '', '', NULL),
(114, '', '', '', '', '', '', '', NULL),
(115, 'adsada', 'asdsa', 'asdsa', 'adssad', 'asdsa', 'test@noemail.com', 'asd', NULL),
(116, '', '', '', '', '', '', '', NULL),
(117, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(118, 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd@noemail.com', 'asd', NULL),
(119, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(120, 'asd', 'asd', 'sad', 'asd', 'asd', 'asd@noemail.com', 'sad', NULL),
(121, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(122, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(123, 'asdsa', 'dasd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(124, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(125, 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd@noemail.com', 'asd', NULL),
(126, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'ads', NULL),
(127, 'asda', 'asds', 'asd', 'asd', 'ad', 'test@noemail.com', 'asd', NULL),
(128, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(129, 'asdas', 'ads', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(130, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(131, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(132, 'sad', 'asd', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', NULL),
(133, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(134, 'Bryan Final', 'Bryan Final', 'Bryan Final', 'Bryan Final', '7th Floor Raha Sulayman Bldg. 108 Benavidez St., Legaspi Village, Makati City', 'test@noemail.com', '09162303314', NULL),
(135, 'asdsa', 'dasd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', NULL),
(136, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'sad', NULL),
(137, 'asd', 'asd', 'asd', 'sad', 'asd', 'test@noemail.com', 'asd', NULL),
(138, 'asdsad', 'asdad', 'asdsad', 'asdsadas', 'asdasd', 'test@noemail.com', 'asdas', NULL),
(139, 'asdas', 'asdsa', 'asdsad', 'asdsad', 'test@noemail.com', 'asd@noemail.com', 'asd', NULL),
(140, 'asdsa', 'asdsad', 'ads', 'asdsad', 'asd', 'test@noemail.com', 'asd', NULL),
(141, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', '2024-08-07 10:30:51'),
(142, 'asd', 'asd', 'asd', 'ad', 'adsa', 'asd@noemail.com', 'ad', NULL),
(143, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', '2024-08-07 10:33:53'),
(144, 'asd', 'asd', 'asd', 'asd', 'adg', 'test@noemail.com', 'asd', '0000-00-00 00:00:00'),
(145, 'asd', 'as', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', '0000-00-00 00:00:00'),
(146, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', '0000-00-00 00:00:00'),
(147, 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'test@noemail.com', 'asd', '2024-08-07 10:37:52'),
(148, 'xasdsad', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', '2024-08-07 10:49:09'),
(149, 'asd', 'sad', 'asd', 'asd', 'asd', 'asd@noemail.com', 'asd', '2024-08-07 10:50:08'),
(150, 'asdasd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd@noemail.com', 'sad', '2024-08-07 10:51:02'),
(151, 'sad', 'asd', 'asd', 'asd', 'test@noemail.com', 'test@noemail.com', 'asd', '2024-08-07 10:55:19'),
(152, 'asd', 'asd', 'ads', 'asd', 'test@noemail.com', 'test@noemail.com', 'asd', '2024-08-07 10:57:12'),
(153, 'asdsad', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', '2024-08-12 08:20:09'),
(154, 'asd', 'asd', 'asd', 'asd', 'asd', 'test@noemail.com', 'asd', '2024-09-09 14:03:35'),
(155, 'wer', 'wer', 'wr', 'wr', 'makati', 'test@noemail.com', 'asdsad', '2024-09-23 14:10:40'),
(156, 'asdsad', 'adsa', 'asd', 'asd', 'asd', 'asdsad@noemail.com', 'asd', '2024-11-13 15:14:37'),
(157, 'testing', 'testing', 'testing', 'testing', 'nmi', 'nmi@nmi.com', 'asdsd', '2025-02-26 11:22:44');

-- --------------------------------------------------------

--
-- Table structure for table `clientmessage`
--

CREATE TABLE `clientmessage` (
  `ClientMessageId` int(11) NOT NULL,
  `Subject` varchar(250) DEFAULT NULL,
  `Message` varchar(10000) DEFAULT NULL,
  `ClientDetailId` varchar(11) DEFAULT NULL,
  `CreateDateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clientmessage`
--

INSERT INTO `clientmessage` (`ClientMessageId`, `Subject`, `Message`, `ClientDetailId`, `CreateDateTime`) VALUES
(1, 'test', 'test', '0', NULL),
(2, 'asd', 'test', '', NULL),
(3, 'asd@noemail.com', 'asd@noemail.com', '', NULL),
(4, 'asd', 'asd', 'Message was', NULL),
(5, 'asd', 'asd', '', NULL),
(6, 'asdsadsad', 'asdsadsa', '71', NULL),
(7, 'asd', 'asd', '', NULL),
(8, 'asd', 'asd', '71', NULL),
(9, 'asda', 'asd', '', NULL),
(10, 'asd', 'asd', '73', NULL),
(11, 'asd', 'asd', '74', NULL),
(12, 'asd', 'asd', '74', NULL),
(13, 'asd', 'asd', '75', NULL),
(14, 'asd', 'asd', '75', NULL),
(15, 'asd', 'asd', '75', NULL),
(16, 'asd', 'asd', '76', NULL),
(17, 'asd', 'asd', '77', NULL),
(18, 'asd', 'asd', '78', NULL),
(19, 'asd', 'asd', '82', NULL),
(20, '', '', 'Message was', NULL),
(21, '', '', 'Message was', NULL),
(22, 'test@noemail.com', 'aads', '', NULL),
(23, 'asd', 'asd', '', NULL),
(24, 'asd', 'asd', '', NULL),
(25, 'asd', 'asd', '88', NULL),
(26, 'asd', 'asd', '89', NULL),
(27, 'bago', 'bago', '90', NULL),
(28, 'bago ulit', 'bago ulit', '91', NULL),
(29, 'asdad', 'asd', '92', NULL),
(30, 'Company Visit', 'Company Visit', '93', NULL),
(31, 'asd', 'asd', '94', NULL),
(32, 'asd', 'asd', '96', NULL),
(33, 'asd', 'asd', '98', NULL),
(34, 'as', 'asd', '99', NULL),
(35, 'asd', 'asd', '100', NULL),
(36, 'asdasd', 'asd', '101', NULL),
(37, 'asd', 'asd', '102', NULL),
(38, 'TEST API (NMI)', 'TEST API (NMI)', '<br />\n<b>W', NULL),
(39, 'asd', 'asd', '<br />\n<b>W', NULL),
(40, '', '', '<br />\n<b>W', NULL),
(41, '', '', '<br />\n<b>W', NULL),
(42, '', '', '<br />\n<b>W', NULL),
(43, '', '', '115', NULL),
(44, '', '', '<br />\n<b>W', NULL),
(45, '', '', '117', NULL),
(46, '', '', '118', NULL),
(47, '', '', '119', NULL),
(48, 'asd', 'asd', '120', NULL),
(49, '', '', '121', NULL),
(50, 'asd', 'sd', '122', NULL),
(51, 'asd', 'asd', '', NULL),
(52, '', '', '', NULL),
(53, '', '', '', NULL),
(54, 'ads', 'asdada', '', NULL),
(55, 'asd', 'asd', '132', NULL),
(56, 'asd', 'ad', '133', NULL),
(57, 'Bryan Final Message', 'Bryan Final Message', '134', NULL),
(58, 'asd', 'asd', '135', NULL),
(59, 'test@noemail.com', 'asd', '136', NULL),
(60, 'test@noemail.com', 'asd', '137', NULL),
(61, 'Bagong Lagay', 'Bagong Lagay', '138', NULL),
(62, 'asd', 'asd', '139', NULL),
(63, 'test@noemail.com', 'ads', '140', NULL),
(64, 'asdasdad', 'asdasdasd', '141', NULL),
(65, 'asd', 'asd', '0', NULL),
(66, 'asd', 'asd', '143', NULL),
(67, 'asd', 'ads', '144', NULL),
(68, 'asd', 'asd', '145', NULL),
(69, 'asd', 'asd', '146', NULL),
(70, 'asd', 'asd', '147', NULL),
(71, 'ads', 'asd', '0', NULL),
(72, 'asd', 'asd', '0', NULL),
(73, 'asd', 'asdsad', '0', NULL),
(74, 'asd', 'asd', '0', NULL),
(75, 'asdasd', 'asd', '148', NULL),
(76, 'asd', 'asd', '149', NULL),
(77, 'asd', 'asd', '150', NULL),
(78, 'asd', 'asd', '151', '2024-08-07 10:55:19'),
(79, 'asd', 'asd', '152', '2024-08-07 10:57:12'),
(80, 'asdsadsad', 'asdsadsad', '153', '2024-08-12 08:20:09'),
(81, 'asd', 'asd', '154', '2024-09-09 14:03:35'),
(82, 'TEST API (NMI)', 'adad', '155', '2024-09-23 14:10:40'),
(83, 'asd', 'asd', '156', '2024-11-13 15:14:37'),
(84, 'asd', 'asd', '157', '2025-02-26 11:22:44');

-- --------------------------------------------------------

--
-- Table structure for table `companycorevaluesdetail`
--

CREATE TABLE `companycorevaluesdetail` (
  `CoreValuesDetailId` int(11) NOT NULL,
  `CompanyProfileHeaderId` int(11) NOT NULL,
  `Title` varchar(250) NOT NULL,
  `Description` varchar(4000) NOT NULL,
  `Arrangement` int(20) NOT NULL,
  `CreateDateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companycorevaluesdetail`
--

INSERT INTO `companycorevaluesdetail` (`CoreValuesDetailId`, `CompanyProfileHeaderId`, `Title`, `Description`, `Arrangement`, `CreateDateTime`) VALUES
(1, 1, 'NURTURING INNOVATION', 'We are committed to the development of new ideas. We challenge the status quo with fresh ideas and curiosity. We explore and test new approaches, learning from wins and failures, and always pushing for better.', 1, '0000-00-00 00:00:00'),
(2, 1, 'EMPOWERING EXCELLENCE', 'Workplace excellence is who we are at NMI. We strive to go above and beyond every day. It’s pushing boundaries of what’s possible and never settling for less than the highest quality of work.', 2, '0000-00-00 00:00:00'),
(3, 1, 'TEAMWORK AND COLLABORATION', 'We bring together different perspectives, talents, and skills that enrich our organization and make it better. Collaborating as a team drives us to innovation, team bonding, learning and development, and shared wins.', 3, '0000-00-00 00:00:00'),
(4, 1, 'WINNING ATTITUDE', 'At NMI, we believe that character and competence should go together. Employee morale and overall workplace culture play significant role as we foster a supportive and engaging environment where individuals can communicate effectively and contribute to organizational success.', 4, '0000-00-00 00:00:00'),
(5, 1, 'OUTSTANDING INTEGRITY', 'We practice honesty and transparency in every part of the business. Doing the right thing — even when no one’s watching. We adhere to moral and ethical principles, even when its difficult or inconvenient.', 5, '0000-00-00 00:00:00'),
(6, 1, 'READY TO SERVE AND CUSTOMER CENTRIC', 'We strive for greatness, and we put our customer first. At NMI, we embody a commitment to proactively prioritize and support the needs of our customers. Our customers are at the center of our business decisions, product development, and service delivery.', 6, '0000-00-00 00:00:00'),
(7, 1, 'KNOWLEDGE AND CURIOSITY', 'We apply what we know to drive results, from our corporate best practices to industry-specific trends and insights. At NMI, no challenge is too big or daunting. We are resourceful, tenacious, and creative in finding solutions.', 7, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `companydetail`
--

CREATE TABLE `companydetail` (
  `CompanyDetailId` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `ContactNo` varchar(100) DEFAULT NULL,
  `EmailAddress` varchar(100) DEFAULT NULL,
  `WebsiteUrl` varchar(100) DEFAULT NULL,
  `OfficeHours` varchar(100) DEFAULT NULL,
  `CreateDateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companydetail`
--

INSERT INTO `companydetail` (`CompanyDetailId`, `Name`, `Address`, `ContactNo`, `EmailAddress`, `WebsiteUrl`, `OfficeHours`, `CreateDateTime`) VALUES
(1, 'NM Network Manager Sales Inc.', '7th Floor Raha Sulayman Building. 108 Benavidez Street., Legaspi Village, Makati City', '(+632) 8782-0126', 'info@nmiph.com', 'www.nmiph.com', 'Monday - Friday : 8:00 AM to 5:00 PM', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `companyicondetail`
--

CREATE TABLE `companyicondetail` (
  `CompanyIconSourceId` int(11) NOT NULL,
  `EntityFkId` int(11) NOT NULL,
  `Value` varchar(350) NOT NULL,
  `Page` int(11) NOT NULL,
  `Type` varchar(250) NOT NULL,
  `CreatedDateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companyicondetail`
--

INSERT INTO `companyicondetail` (`CompanyIconSourceId`, `EntityFkId`, `Value`, `Page`, `Type`, `CreatedDateTime`) VALUES
(1, 1, 'hgi hgi-stroke hgi-nano-technology', 1, 'icon', '0000-00-00 00:00:00'),
(2, 2, 'hgi hgi-stroke hgi-ai-innovation-03', 1, 'icon', '0000-00-00 00:00:00'),
(3, 3, 'hgi hgi-stroke hgi-blockchain-04', 1, 'icon', '0000-00-00 00:00:00'),
(4, 4, 'hgi hgi-stroke hgi-champion', 1, 'icon', '0000-00-00 00:00:00'),
(5, 5, 'hgi hgi-stroke hgi-star', 1, 'icon', '0000-00-00 00:00:00'),
(6, 6, 'hgi hgi-stroke hgi-service', 1, 'icon', '0000-00-00 00:00:00'),
(7, 7, 'hgi hgi-stroke hgi-brain', 1, 'icon', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `companynewsdetail`
--

CREATE TABLE `companynewsdetail` (
  `CompanyNewsDetailId` int(11) NOT NULL,
  `CompanyNewsHeaderId` int(11) DEFAULT NULL,
  `Type` varchar(250) DEFAULT NULL,
  `Title` varchar(250) DEFAULT NULL,
  `Description` varchar(4000) DEFAULT NULL,
  `CreateDateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companynewsdetail`
--

INSERT INTO `companynewsdetail` (`CompanyNewsDetailId`, `CompanyNewsHeaderId`, `Type`, `Title`, `Description`, `CreateDateTime`) VALUES
(1, 1, 'TrainingAndCertifications', 'Trainings and Certifications', 'We believe in the value of continuous learning that results in excellence.Through our training programs, we fine-tune expertise and create a pool of diverse engineers, technicians, and customer service representatives who understand your needs.', '2024-09-12 00:00:00'),
(2, 1, 'EventsAndEngagements', 'Events and Engagements', 'We are passionate about understanding our customers, that is why we engage on relationship building activities that gives us the opportunity to know our customers needs better, so we can offer the best help and support our clients need.', '2024-09-12 00:00:00'),
(3, 1, 'CompanyCulture', 'Company Culture', 'Empowered employees, empower customers. At NMI, we make sure to cultivate an enriching culture conducive to learning, camaraderie, and good work ethics.', '2024-09-12 00:00:00'),
(4, 1, 'CommitmentToSecurity', 'Commitment to Security', 'With data breaches and cybercrime on the rise, we make sure that our security measures, regulatory certificates, and credibility are at par with the required standards to ensure accountability.', '2024-09-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `companynewsheader`
--

CREATE TABLE `companynewsheader` (
  `CompanyNewsHeaderId` int(11) NOT NULL,
  `Title` varchar(250) DEFAULT NULL,
  `SubTitle` varchar(250) DEFAULT NULL,
  `Description` varchar(4000) DEFAULT NULL,
  `SubDescription` varchar(4000) DEFAULT NULL,
  `CreateDateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companynewsheader`
--

INSERT INTO `companynewsheader` (`CompanyNewsHeaderId`, `Title`, `SubTitle`, `Description`, `SubDescription`, `CreateDateTime`) VALUES
(1, 'News', 'Our work in Improving IT Lives', 'At NMI, we make sure that our core values are deeply ingrained in our work. For more than a decade in the IT Industry, we have remained true to our mission in accelerating business growth, increasing IT productivity and improving IT efficiency.', 'Know more on how we continue to Improve IT lives', '2024-09-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `companyprofiledetail`
--

CREATE TABLE `companyprofiledetail` (
  `CompanyProfileDetailId` int(11) NOT NULL,
  `CompanyProfileHeaderId` int(11) DEFAULT NULL,
  `Type` varchar(250) DEFAULT NULL,
  `Title` varchar(250) DEFAULT NULL,
  `Description` varchar(4000) DEFAULT NULL,
  `CreateDateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companyprofiledetail`
--

INSERT INTO `companyprofiledetail` (`CompanyProfileDetailId`, `CompanyProfileHeaderId`, `Type`, `Title`, `Description`, `CreateDateTime`) VALUES
(1, 1, 'Mission', 'Mission', 'To passionately, efficiently and reliably provide revolutionary systems and solutions that will improve IT lives.', '2024-09-09 00:00:00'),
(2, 1, 'Vision', 'Vision', 'To be a provider of transformative solutions and services to enterprise.', '2024-09-09 00:00:00'),
(3, 1, 'CoreValues', 'Core Values', 'Customer-focus,Innovation,Integrity,Teamwork,Excellence', '2024-09-09 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `companyprofileheader`
--

CREATE TABLE `companyprofileheader` (
  `CompanyProfileHeaderId` int(11) NOT NULL,
  `Title` varchar(250) DEFAULT NULL,
  `Description` varchar(4000) DEFAULT NULL,
  `CreateDateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companyprofileheader`
--

INSERT INTO `companyprofileheader` (`CompanyProfileHeaderId`, `Title`, `Description`, `CreateDateTime`) VALUES
(1, 'We are NMI', 'Network Manager is an IT Solutions Provider that offers IT management automation that allows organizations to significantly reduce their IT operating costs, remarkably boost operational efficiencies. Specializing in the software development of Kaseya- based applications, we aim to provide breakthrough solutions which redefine IT management. We lead in providing IT Solutions for a variety of clients seeking automation for highly improved efficiency and productivity.', '2024-09-09 00:00:00');

-- --------------------------------------------------------

--
-- Stand-in structure for view `cvvaluestbl`
-- (See below for the actual view)
--
CREATE TABLE `cvvaluestbl` (
);

-- --------------------------------------------------------

--
-- Table structure for table `footerdetail`
--

CREATE TABLE `footerdetail` (
  `FooterDetailId` int(11) NOT NULL,
  `FooterHeaderId` int(11) DEFAULT NULL,
  `Type` varchar(250) DEFAULT NULL,
  `Title` varchar(250) DEFAULT NULL,
  `Description` varchar(4000) DEFAULT NULL,
  `Url` varchar(250) DEFAULT NULL,
  `CreateDateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `footerdetail`
--

INSERT INTO `footerdetail` (`FooterDetailId`, `FooterHeaderId`, `Type`, `Title`, `Description`, `Url`, `CreateDateTime`) VALUES
(1, 1, 'Information', 'INFORMATION', 'Solutions,News,Company,Privacy & Policy,Terms & Conditions', NULL, '2024-09-16 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `footerheader`
--

CREATE TABLE `footerheader` (
  `FooterHeaderId` int(11) NOT NULL,
  `CompanyDetailId` int(11) DEFAULT NULL,
  `Title` varchar(250) DEFAULT NULL,
  `Description` varchar(4000) DEFAULT NULL,
  `CreateDateTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `footerheader`
--

INSERT INTO `footerheader` (`FooterHeaderId`, `CompanyDetailId`, `Title`, `Description`, `CreateDateTime`) VALUES
(1, 1, NULL, 'Technology is the backbone of all modern businesses and we at NM Network Manager Sales Inc. carry a variety of integrated tools catered to make IT easy, simple, and accessible for you, your team, and your organization-to further equip and optimize your businesses through effective, efficient and affordable tools to IMPROVE IT LIVES.', '2024-09-16 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `kaseya365detail`
--

CREATE TABLE `kaseya365detail` (
  `Kaseya365DetailId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kaseya365header`
--

CREATE TABLE `kaseya365header` (
  `Kaseya365HeaderId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `websitepage`
--

CREATE TABLE `websitepage` (
  `WebsitePageId` int(11) NOT NULL,
  `Name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `websitepage`
--

INSERT INTO `websitepage` (`WebsitePageId`, `Name`) VALUES
(1, 'Core Values');

-- --------------------------------------------------------

--
-- Structure for view `cvvaluestbl`
--
DROP TABLE IF EXISTS `cvvaluestbl`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `cvvaluestbl`  AS SELECT `companyiconsource`.`DataSource` AS `cvIcon`, `companycorevaluesdetail`.`Title` AS `cvTitle`, `companycorevaluesdetail`.`Description` AS `cvDescription` FROM (`companyiconsource` join `companycorevaluesdetail`) WHERE `companyiconsource`.`RelationId` = `companycorevaluesdetail`.`CoreValuesDetailId` AND `companyiconsource`.`Page` = 1 AND `companyiconsource`.`Type` = 'icon' ORDER BY `companycorevaluesdetail`.`Arrangement` ASC ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clientdetail`
--
ALTER TABLE `clientdetail`
  ADD PRIMARY KEY (`ClientDetailId`);

--
-- Indexes for table `clientmessage`
--
ALTER TABLE `clientmessage`
  ADD PRIMARY KEY (`ClientMessageId`);

--
-- Indexes for table `companycorevaluesdetail`
--
ALTER TABLE `companycorevaluesdetail`
  ADD PRIMARY KEY (`CoreValuesDetailId`);

--
-- Indexes for table `companydetail`
--
ALTER TABLE `companydetail`
  ADD PRIMARY KEY (`CompanyDetailId`);

--
-- Indexes for table `companyicondetail`
--
ALTER TABLE `companyicondetail`
  ADD PRIMARY KEY (`CompanyIconSourceId`),
  ADD KEY `fk_website_icon` (`Page`);

--
-- Indexes for table `companynewsdetail`
--
ALTER TABLE `companynewsdetail`
  ADD PRIMARY KEY (`CompanyNewsDetailId`);

--
-- Indexes for table `companynewsheader`
--
ALTER TABLE `companynewsheader`
  ADD PRIMARY KEY (`CompanyNewsHeaderId`);

--
-- Indexes for table `companyprofiledetail`
--
ALTER TABLE `companyprofiledetail`
  ADD PRIMARY KEY (`CompanyProfileDetailId`);

--
-- Indexes for table `companyprofileheader`
--
ALTER TABLE `companyprofileheader`
  ADD PRIMARY KEY (`CompanyProfileHeaderId`);

--
-- Indexes for table `footerdetail`
--
ALTER TABLE `footerdetail`
  ADD PRIMARY KEY (`FooterDetailId`);

--
-- Indexes for table `footerheader`
--
ALTER TABLE `footerheader`
  ADD PRIMARY KEY (`FooterHeaderId`);

--
-- Indexes for table `websitepage`
--
ALTER TABLE `websitepage`
  ADD PRIMARY KEY (`WebsitePageId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clientdetail`
--
ALTER TABLE `clientdetail`
  MODIFY `ClientDetailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=158;

--
-- AUTO_INCREMENT for table `clientmessage`
--
ALTER TABLE `clientmessage`
  MODIFY `ClientMessageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `companycorevaluesdetail`
--
ALTER TABLE `companycorevaluesdetail`
  MODIFY `CoreValuesDetailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `companydetail`
--
ALTER TABLE `companydetail`
  MODIFY `CompanyDetailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `companyicondetail`
--
ALTER TABLE `companyicondetail`
  MODIFY `CompanyIconSourceId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `companynewsdetail`
--
ALTER TABLE `companynewsdetail`
  MODIFY `CompanyNewsDetailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `companynewsheader`
--
ALTER TABLE `companynewsheader`
  MODIFY `CompanyNewsHeaderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `companyprofiledetail`
--
ALTER TABLE `companyprofiledetail`
  MODIFY `CompanyProfileDetailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `companyprofileheader`
--
ALTER TABLE `companyprofileheader`
  MODIFY `CompanyProfileHeaderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `footerdetail`
--
ALTER TABLE `footerdetail`
  MODIFY `FooterDetailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `footerheader`
--
ALTER TABLE `footerheader`
  MODIFY `FooterHeaderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `websitepage`
--
ALTER TABLE `websitepage`
  MODIFY `WebsitePageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `companyicondetail`
--
ALTER TABLE `companyicondetail`
  ADD CONSTRAINT `fk_website_icon` FOREIGN KEY (`Page`) REFERENCES `websitepage` (`WebsitePageId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
