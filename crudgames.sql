-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Máquina: localhost
-- Data de Criação: 11-Ago-2022 às 20:58
-- Versão do servidor: 5.6.13
-- versão do PHP: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de Dados: `crudgames`
--
CREATE DATABASE IF NOT EXISTS `crudgames` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `crudgames`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogos`
--

CREATE TABLE IF NOT EXISTS `jogos` (
  `nome` varchar(45) NOT NULL,
  `preco` varchar(45) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `idGames` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idGames`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Extraindo dados da tabela `jogos`
--

INSERT INTO `jogos` (`nome`, `preco`, `categoria`, `idGames`) VALUES
('GTA 2', '100', 'Ação', 1),
('GunsMetal', '100', 'Ação', 2),
('GTA 2', '100', 'Ação', 3),
('GTA 2', '100', 'Ação', 4),
('Bernado', '1', 'Baixo', 5);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
