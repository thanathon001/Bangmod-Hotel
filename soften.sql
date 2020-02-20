-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 02, 2019 at 07:50 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `soften`
--

-- --------------------------------------------------------

--
-- Table structure for table `BookingInfo`
--

CREATE TABLE `BookingInfo` (
  `BookingID` int(7) UNSIGNED NOT NULL,
  `CheckIn` date NOT NULL,
  `CheckOut` date NOT NULL,
  `RoomNo` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `BookingInfo`
--

INSERT INTO `BookingInfo` (`BookingID`, `CheckIn`, `CheckOut`, `RoomNo`) VALUES
(34, '2019-12-04', '2019-12-07', '201'),
(35, '2019-12-04', '2019-12-07', '101'),
(36, '2019-12-03', '2019-12-07', '202'),
(37, '2019-12-04', '2019-12-06', '203'),
(38, '2019-12-04', '2019-12-06', '102'),
(39, '2019-12-03', '2019-12-05', '301'),
(40, '2019-12-04', '2019-12-05', '301'),
(41, '2019-12-04', '2019-12-05', '302'),
(42, '2019-12-04', '2019-12-05', '303'),
(43, '2019-12-04', '2019-12-05', '304'),
(44, '2019-12-04', '2019-12-05', '305'),
(45, '2019-12-04', '2019-12-05', '306'),
(46, '2019-12-04', '2019-12-05', '307'),
(47, '2019-12-04', '2019-12-05', '308'),
(48, '2019-12-04', '2019-12-05', '309'),
(49, '2019-12-03', '2019-12-07', '204'),
(50, '2019-12-03', '2019-12-05', '103'),
(51, '2019-12-03', '2019-12-06', '205');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `email` varchar(326) NOT NULL,
  `pass` varchar(512) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `fName` varchar(100) NOT NULL,
  `lName` varchar(100) NOT NULL,
  `CCard` varchar(17) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`email`, `pass`, `phone`, `fName`, `lName`, `CCard`) VALUES
('day@gmail.com', 'password', '0987635142', 'day', 'dayJaa', '1234123412341234');

-- --------------------------------------------------------

--
-- Table structure for table `RoomInfo`
--

CREATE TABLE `RoomInfo` (
  `RoomNo` int(11) NOT NULL,
  `RoomType` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `RoomInfo`
--

INSERT INTO `RoomInfo` (`RoomNo`, `RoomType`) VALUES
(101, 'Standard'),
(102, 'Standard'),
(103, 'Standard'),
(104, 'Standard'),
(105, 'Standard'),
(106, 'Standard'),
(107, 'Standard'),
(108, 'Standard'),
(109, 'Standard'),
(201, 'deluxe'),
(202, 'deluxe'),
(203, 'deluxe'),
(204, 'deluxe'),
(205, 'deluxe'),
(206, 'deluxe'),
(207, 'deluxe'),
(208, 'deluxe'),
(209, 'deluxe'),
(301, 'luxury'),
(302, 'luxury'),
(303, 'luxury'),
(304, 'luxury'),
(305, 'luxury'),
(306, 'luxury'),
(307, 'luxury'),
(308, 'luxury'),
(309, 'luxury');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `BookingInfo`
--
ALTER TABLE `BookingInfo`
  ADD PRIMARY KEY (`BookingID`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `RoomInfo`
--
ALTER TABLE `RoomInfo`
  ADD PRIMARY KEY (`RoomNo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `BookingInfo`
--
ALTER TABLE `BookingInfo`
  MODIFY `BookingID` int(7) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
