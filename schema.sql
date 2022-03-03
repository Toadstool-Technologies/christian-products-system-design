DROP DATABASE IF EXISTS productdb;

CREATE DATABASE productdb;

\c productdb

DROP TABLE IF EXISTS products, features, styles, style_photos, skus;

CREATE TABLE products (
 id BIGSERIAL,
 name VARCHAR(50),
 slogan TEXT,
 description TEXT,
 category VARCHAR(20),
 default_price INTEGER
);


ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (id);

CREATE TABLE features (
 id BIGSERIAL,
 product_id BIGSERIAL,
 feature VARCHAR(80),
 value VARCHAR(80)
);


ALTER TABLE features ADD CONSTRAINT features_pkey PRIMARY KEY (id);

CREATE TABLE styles (
 id BIGSERIAL,
 product_id BIGSERIAL,
 name VARCHAR(50),
 sale_price VARCHAR(10),
 original_price VARCHAR(10),
 default_style BOOLEAN
);


ALTER TABLE styles ADD CONSTRAINT styles_pkey PRIMARY KEY (id);

CREATE TABLE style_photos (
 id BIGSERIAL,
 styleId BIGSERIAL,
 url TEXT,
 thumbnail_url TEXT
);


ALTER TABLE style_photos ADD CONSTRAINT style_photos_pkey PRIMARY KEY (id);

CREATE TABLE skus (
 id BIGSERIAL,
 styleId BIGSERIAL,
 size VARCHAR(4),
 quantity INTEGER
);


ALTER TABLE skus ADD CONSTRAINT skus_pkey PRIMARY KEY (id);

ALTER TABLE features ADD CONSTRAINT features_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE styles ADD CONSTRAINT styles_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE style_photos ADD CONSTRAINT style_photos_id_fkey FOREIGN KEY (styleId) REFERENCES styles(id);
ALTER TABLE skus ADD CONSTRAINT skus_id_fkey FOREIGN KEY (styleId) REFERENCES styles(id);