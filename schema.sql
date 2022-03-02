CREATE TABLE products (
 id BIGSERIAL,
 campus VARCHAR(15),
 name VARCHAR(50),
 slogan VARCHAR(50),
 description VARCHAR(100),
 category VARCHAR(20)
);


ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (id);

CREATE TABLE features (
 id BIGSERIAL,
 feature VARCHAR(20),
 value VARCHAR(20)
);


ALTER TABLE features ADD CONSTRAINT features_pkey PRIMARY KEY (id);

CREATE TABLE styles (
 id BIGSERIAL,
 style_id BIGSERIAL,
 name VARCHAR(50),
 original_price INTEGER,
 sale_price INTEGER,
 default? BOOLEAN
);


ALTER TABLE styles ADD CONSTRAINT styles_pkey PRIMARY KEY (id);

CREATE TABLE style_photos (
 id BIGSERIAL,
 thumbnail_url TEXT,
 url TEXT
);


ALTER TABLE style_photos ADD CONSTRAINT style_photos_pkey PRIMARY KEY (id);

CREATE TABLE skus (
 id BIGSERIAL,
 sku_id INTEGER,
 quantity INTEGER,
 size VARCHAR(4)
);


ALTER TABLE skus ADD CONSTRAINT skus_pkey PRIMARY KEY (id);

ALTER TABLE products ADD CONSTRAINT products_id_fkey FOREIGN KEY (id) REFERENCES features(id);
ALTER TABLE products ADD CONSTRAINT products_id_fkey FOREIGN KEY (id) REFERENCES styles(id);
ALTER TABLE styles ADD CONSTRAINT styles_style_id_fkey FOREIGN KEY (style_id) REFERENCES style_photos(id);
ALTER TABLE styles ADD CONSTRAINT styles_style_id_fkey FOREIGN KEY (style_id) REFERENCES skus(id);