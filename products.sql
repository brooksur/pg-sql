CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR(40),
	department VARCHAR(40),
	price INTEGER,
	weight INTEGER
);

UPDATE products
SET price = 999
WHERE price = 0;

ALTER TABLE products
ALTER COLUMN price
SET NOT NULL;

ALTER TABLE products
ALTER COLUMN price
SET DEFAULT 999;

ALTER TABLE products
ADD UNIQUE (name);

INSERT INTO products (name, department, price, weight)
VALUES ('Shirt', 'Clothes', 100, 50), ('Pants', 'Clothes', 150, 100), ('Shoes', 'Clothes', 75, 25);

ALTER TABLE products
ADD CHECK (price > 0);

CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	created_at TIMESTAMP NOT NULL,
	est_delivery TIMESTAMP NOT NULL,
	CHECK (created_at < est_delivery)
);

SELECT * FROM products;




