CREATE TYPE typology AS ENUM ('citycar', 'cabrio', 'coupe', 'sedan', 'compact_car', 'SUV', 'minivan', 'SW');

CREATE TABLE IF NOT EXISTS manufacturers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);    

CREATE TABLE IF NOT EXISTS cars_models (
    id SERIAL PRIMARY KEY,
    manufacturer_id INTEGER REFERENCES manufacturers (id),
    name VARCHAR(255) NOT NULL,                                 
    typology typology NOT NULL,
    price DECIMAL NOT NULL,
    engine DECIMAL NOT NULL,
    cylinders INTEGER,
    power INTEGER NOT NULL,
    max_speed INTEGER,
    weight INTEGER,
    image VARCHAR(255) NOT NULL
);