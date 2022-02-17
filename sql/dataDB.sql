USE `artisanMarket`;

insert into users (id, name, lastname, email, password, image, roles_id) 
values (1, 'Deerdre', 'Portugal', 'dportugal0@51.la', 'Jihd379lXw', 'default.png', 1),
(2, 'Shaylyn', 'Scullard', 'sscullard1@huffingtonpost.com', 'AtISh0j', 'default.png', 2),
(3, 'Lukas', 'Martin', 'lmartin2@bloglines.com', 'ae1kya6VT', 'default.png', 1),
(4, 'Leyla', 'Batthew', 'lbatthew3@hatena.ne.jp', 'P7puFQe9V', 'default.png', 2),
(5, 'Arielle', 'Cocci', 'acocci4@alibaba.com', 'BXWNzkFh', 'default.png', 1),
(6, 'Miguelita', 'Rackam', 'mrackam5@nih.gov', '5tS2BNBZX9B', 'default.png', 1),
(7, 'Damien', 'Smewings', 'dsmewings6@rambler.ru', 'kQ45UU', 'default.png', 1),
(8, 'Chiarra', 'Eliyahu', 'celiyahu7@marketwatch.com', 'e54CoeEl', 'default.png', 2),
(9, 'Webb', 'Brasted', 'wbrasted8@ebay.com', '3khYPUS', 'default.png', 1),
(10, 'Gisele', 'Vassay', 'gvassay9@shutterfly.com', 'CnMlMX9n', 'default.png', 1),
(11, 'Luke', 'Suter', 'lsutera@nytimes.com', 'S8NeG1S', 'default.png', 2),
(12, 'Janella', 'Maytom', 'jmaytomb@gravatar.com', 'fyFdTrsToun', 'default.png', 1),
(13, 'Donaugh', 'Weson', 'dwesonc@weather.com', 'ZtGlqMWEH0', 'default.png', 1),
(14, 'Angeli', 'Cregin', 'acregind@feedburner.com', 'AvdXT9sVEC3', 'default.png', 2),
(15, 'Bondon', 'Jonas', 'bjonase@gmpg.org', 'TRx9Zqus', 'default.png', 2),
(16, 'Reeta', 'Frankema', 'rfrankemaf@opensource.org', 'ZaBiTyMUNSKr', 'default.png', 2),
(17, 'Arluene', 'Seldner', 'aseldnerg@php.net', 'bsfoWLgfDqjv', 'default.png', 1),
(18, 'Corrie', 'Filipputti', 'cfilipputtih@senate.gov', '2paD0FbWu4Sf', 'default.png', 1),
(19, 'Bear', 'Tranmer', 'btranmeri@opera.com', 'GiKrHb', 'LeonardoP.PNG', 2),
(20, 'Honey', 'Di Biaggi', 'hdibiaggij@phoca.cz', '8HymnyW6YuTK', 'default.png', 1);

insert into products (id, name, price, description, quantity, picture, regions_id) 
values (1, 'Armadillo Sikuani', 8.72, 'Armadillo elaborado en Madera de Balso por manos artesanas en el departamendo de Vichada.', 11, 'armadillo.jpg', 4),
(2, 'Canasta en Iraca', 7.00, 'Conocido por el trabajo de la palma de iraca para la elaboración de sombreros y diversidad de cestos Sandoná, es heredero de las técnicas de sus antepasados quillacingas para el manejo de dicha fibra vegetal.', 13, 'canasto-iraca.jpg', 5),
(3, 'Banco Pensador Colibrí', 12.40, 'Banco Pensador elaborado por manos artesanas con Madera Chonta en el departamento del Putumayo.', 1, 'colibri.jpg', 5),
(4, 'Hamaca San Jacinto', 20.50, 'Al norte de Colombia, existe un territorio considerado el paraíso de la artesanía y el folclor de la costa Caribe, gracias a la elaboración de hamacas y de gaitas que entonan los sonidos tradicionales de esta región como la cumbia: San Jacinto.', 10, 'Hamaca san jacinto.jpeg', 5),
(5, 'Willyz “Yipao” con carga de café', 4.41, 'El Willyz yipao con carga de café, es una de las expresiones más representativas del paisaje y el folclor del eje cafetero.', 7, 'willy.jpg', 4),
(6, 'Máscara tradicional Shinyak', 2.24, 'Pieza artesanal elaborada por el taller Shinyak "En Sibundoy saben que si un sauce viejo se cae deben llamar a Marcelino Chasoy.', 13, 'mascara.jpg', 6),
(7, 'Armadillo Sikuani', 8.72, 'Armadillo elaborado en Madera de Balso por manos artesanas en el departamendo de Vichada.', 11, 'armadillo.jpg', 1),
(8, 'Canasta en Iraca', 7.00, 'Conocido por el trabajo de la palma de iraca para la elaboración de sombreros y diversidad de cestos Sandoná, es heredero de las técnicas de sus antepasados quillacingas para el manejo de dicha fibra vegetal.', 13, 'canasto-iraca.jpg', 2),
(9, 'Máscara tradicional Shinyak', 2.24, 'Pieza artesanal elaborada por el taller Shinyak "En Sibundoy saben que si un sauce viejo se cae deben llamar a Marcelino Chasoy.', 13, 'mascara.jpg', 6),
(10, 'Banco Pensador Colibrí', 12.40, 'Banco Pensador elaborado por manos artesanas con Madera Chonta en el departamento del Putumayo.', 1, 'colibri.jpg', 5);

insert into roles (id, roleName) 
values (1, 'Administrador'),
(2, 'Cliente');

insert into regions (id, region) 
values (1, 'Región Andina'),
(2, 'Región Caribe'),
(3, 'Región Pacífica'),
(4, 'Región de la Orinoquía'),
(5, 'Región Amazónica'),
(6, 'Región Insular');

--SET FOREIGN_KEY_CHECKS=0; comando para que se pueda agregar información en tablas con dependencias.
