-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-08-2021 a las 03:54:14
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `descripcion`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Bazar', 'Articulos de Bazar', 1, 0, '2021-08-05 22:22:15', '2021-08-05 22:22:15'),
(2, 'Libreria', 'Articulos de Libreria', 1, 0, '2021-08-05 22:22:37', '2021-08-05 22:22:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `confirmacionCorreo` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `habilitado` int(11) NOT NULL DEFAULT 0,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `username`, `pass`, `mail`, `confirmacionCorreo`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'martin ruiz', '7c222fb2927d828af22f592134e8932480637c0d', 'alacran.mlr@gmail.com', '1f18eade-d116-4978-b768-977fc222e948', 1, 0, '2021-08-05 22:39:09', '2021-08-05 22:39:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `id_categoria`, `precio`, `stock`, `imagen`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Mate', 1, 300, 100, 'mate.jpg', 1, 0, '2021-08-05 22:23:16', '2021-08-05 22:23:16'),
(2, 'Repuesto Exito', 2, 350, 50, 'respues exito.jpg', 1, 0, '2021-08-05 22:24:04', '2021-08-05 22:31:38'),
(3, 'Cuenco Ceramica', 1, 150, 10, 'sueña.jpeg', 1, 0, '2021-08-05 22:25:00', '2021-08-05 22:25:00'),
(4, 'Tabla Madera', 1, 250, 120, 'tabla madera.jpg', 1, 0, '2021-08-05 22:25:48', '2021-08-05 22:25:48'),
(5, 'Termo Ploteado', 1, 1500, 100, 'termo ploteado.jpg', 1, 0, '2021-08-05 22:26:29', '2021-08-05 22:26:29'),
(6, 'Cuaderno Universitario', 2, 250, 30, 'universitario.jpg', 1, 0, '2021-08-05 22:27:15', '2021-08-05 22:27:15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
