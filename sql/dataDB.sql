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
values (1, 'Phaulothamnus A. Gray', 1.72, 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.', 11, 'armadillo.jpg', 4),
(2, 'Lesquerella ovalifolia Rydb. ex Britton ssp. alba (Goodman) Rollins & Shaw', 1.06, 'Aliquam erat volutpat.', 13, 'canasto-iraca', 5),
(3, 'Croton alabamensis E.A. Sm. ex Chapm. var. alabamensis', 1.47, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.', 1, 'colibri.jpg', 5),
(4, 'Erigeron eatonii A. Gray', 2.22, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 10, 'Hamaca san jacinto.jpeg', 5),
(5, 'Limnanthes striata Jeps.', 1.41, 'Vivamus tortor. Duis mattis egestas metus.', 1, 'mascara.jpg', 4),
(6, 'Polygala rectipilis S.F. Blake', 2.24, 'Nam dui.', 13, 'willy.jpg', 6),
(7, 'Leymus ×multiflorus (Gould) Barkworth & Atkins', 2.63, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.', 9, 'armadillo.jpg', 3),
(8, 'Carex radiata (Wahlenb.) Small', 2.79, 'Curabitur in libero ut massa volutpat convallis.', 13, 'canasto-iraca.jpg', 3),
(9, 'Munroa Torr., orth. cons.', 2.85, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.', 7, 'mascara.jpg', 1),
(10, 'Salvinia minima Baker', 2.44, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.', 7, 'colibri.jpg', 3);

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
