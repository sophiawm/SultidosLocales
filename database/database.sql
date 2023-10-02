CREATE database surtidoslocales_app;
USE surtidoslocales_app;
CREATE TABLE products (
	id INT AUTO_INCREMENT PRIMARY KEY (id),
    product_name varchar(50) NOT NULL,
    price varchar(50) NOT NULL,
    product_description varchar (300) NOT NULL,
    product_images image (max),
    brand_id integer,
    category varchar(50) NOT NULL,
    stock varchar(50) NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
    );
INSERT INTO products (id, product_name, price, product_description,  product_images, brand_id, category, stock) VALUES 
    (1, "Polvo de Aguaje", 31, "El aguaje en polvo que ayuda al equilibrio hormonal. Su origen es de Loreto y contiene 150gr. de producto.", 'polvoDeAguaje.jpeg', 1, "Suplementos", 30),
    (2, "Sangre de grado", 28, "Sangre de Grado 100% puro de doble filtrado en gotero de 30 ml.", 'sangreDeGrado.jpeg', 1, "Cuidado personal", 50),
    (3, "Maca Mixta gelatinizada", 18, "Mezcla en polvo de macas instantáneas 100% de origen de Junín.", 'macaMixtaBioandean.jpeg', 2, "Suplementos", 40),
    (4, "Maca Roja gelatinizada", 20, "Aprovechar todas las propiedades de la maca roja instantáneas 100% de origen de Junín", 'macaRojaBioandean.jpeg', 2, "Suplementos", 40),
    (5, "Hojuelas de Kiwicha", 4, "Super alimento rico en vitaminas y fibra. Su origen es de Ayacucho y contiene 170gr. de producto.", 'hojuelaDeKiwicha.jpeg', 3, "Comida", 50),
    (6, "Hojuelas de Avena con Quinua precocida", 2, "Super alimento rico en proteínas y fibra. Su origen es de Ayacucho y contiene 170gr. de producto.", 'hojuelaDeAvenaConQuinua.jpeg', 3, "Comida", 50),
    (7, "Extracto de Mashua", 25, "El zumo de Mashua Negra  acompañado de los ingredientes Uña de Gato y Hojas de Achiote de origen de Junín, en formato de 1 L.", 'extractoDeMashua.jpeg', 4, "Suplementos", 20),
    (8, "Harina de Tocosh", 22, "La harina deriva de la fermentación de la pulpa de la papa. Su origen es de Junín.", 'hojuelaDeAvenaConQuinua.jpeg', 4, "Comida", 50),
    (9, "Aceite de Orégano Comestible", 15, "El zumo de Mashua Negra  acompañado de los ingredientes Uña de Gato y Hojas de Achiote de origen de Junín (1 L).", 'aceiteDeOregano.jpeg', 5, "Cuidado personal", 20),
    (10, "Jabón de Arcilla Verde", 33, "La harina deriva de la fermentación de la pulpa de la papa. Su origen es de Junín.", 'jabonDeArcillaVerde.jpeg', 5, "Cuidado personal",30);


CREATE TABLE brands (
	id INT AUTO_INCREMENT PRIMARY KEY (id),
    brand_name varchar(50) NOT NULL,
    brand_description varchar (300) NOT NULL,
    brand_logo image (max),
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
    );
    
INSERT INTO brands (id,  brand_name,  brand_description,   brand_logo) VALUES 
    (1, "Amazon Andes", "Origen de Loreto", 'logoAmazonAndes.jpeg'),
    (2, "BioAndean", "Origen de Junín", 'logoBioAndean.jpeg'),
    (3, "D’Valle", "Origen de Amazonas", 'logoDValle.jpeg'),
    (4, "Condor Andino", "Origen de Ayacucho", 'logoCondorAndino.jpeg'),
    (5, "Misha Rastrera", "Origen de Lima", 'logoMishaRastrera.jpeg');

ALTER TABLE `products` ADD FOREIGN KEY (`id`) REFERENCES `order_items` (`product_id`);