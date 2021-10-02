CREATE DATABASE goflux;

CREATE TABLE embarcadores (
	id serial primary key,
  	name varchar(150) NOT NULL,
  	doc varchar(18) NOT NULL,
  	about text NOT NULL,
  	active boolean,
  	site text
);

CREATE TABLE transportadores (
	id serial primary key,
  	name varchar(150) NOT NULL,
  	doc varchar(18) NOT NULL,
  	about text NOT NULL,
  	active boolean,
  	site text
);

CREATE TABLE ofertas (
	id serial primary key,
  	id_customer int NOT NULL,
  	origin text NOT NULL,
  	destiny text NOT NULL,
  	initial_value numeric NOT NULL,
  	amount numeric NOT NULL,
  	amount_type text
);

CREATE TABLE lances (
	id_provider int,
  	id_offer int references ofertas(id),
  	value numeric,
  	amount numeric
);