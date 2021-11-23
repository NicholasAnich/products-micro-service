BEGIN;


CREATE TABLE IF NOT EXISTS products.features
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    feature character varying COLLATE pg_catalog."default" NOT NULL,
    value character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT features_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products.photos
(
    id integer NOT NULL,
    "styleId" integer NOT NULL,
    url character varying COLLATE pg_catalog."default" NOT NULL,
    thumbnail_url character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT photos_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products.product
(
    id integer NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    slogan character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    category character varying COLLATE pg_catalog."default" NOT NULL,
    default_price character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT product_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products.related
(
    id integer NOT NULL,
    current_product_id integer NOT NULL,
    related_product_id integer NOT NULL,
    CONSTRAINT related_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products.skus
(
    id integer NOT NULL,
    "styleId" integer NOT NULL,
    size character varying COLLATE pg_catalog."default" NOT NULL,
    quantity integer NOT NULL,
    CONSTRAINT skus_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products.styles
(
    id integer NOT NULL,
    "productId" integer NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    sale_price character varying COLLATE pg_catalog."default",
    original_price integer NOT NULL,
    default_style integer NOT NULL,
    CONSTRAINT styles_pkey PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS products.product
    ADD FOREIGN KEY (id)
    REFERENCES products.styles ("productId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS products.product
    ADD FOREIGN KEY (id)
    REFERENCES products.related (current_product_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS products.product
    ADD FOREIGN KEY (id)
    REFERENCES products.features (product_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS products.product
    ADD FOREIGN KEY (id)
    REFERENCES products.styles ("productId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS products.styles
    ADD FOREIGN KEY (id)
    REFERENCES products.photos ("styleId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS products.styles
    ADD FOREIGN KEY (id)
    REFERENCES products.skus ("styleId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;