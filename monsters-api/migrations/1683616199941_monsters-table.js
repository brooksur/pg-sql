/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE monsters (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      personality VARCHAR(50) NOT NULL
    );

    CREATE TABLE habitats (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      climate VARCHAR(50) NOT NULL,
      temperature INT
    );

    CREATE TABLE monsters_habitats (
      monster_id INT REFERENCES monsters(id) ON DELETE CASCADE,
      habitat_id INT REFERENCES habitats(id) ON DELETE CASCADE
    );

    INSERT INTO monsters (name, personality) 
    VALUES 
      ('Sphinx', 'Enigmatic'),
      ('Lamia', 'Cruel'),
      ('Chimera', 'Enigmatic'),
      ('Manticore', 'Cruel'),
      ('Cerberus', 'Passionate');

    INSERT INTO habitats (name, climate, temperature)
    VALUES
      ('Cave', 'temperate', 10),
      ('Mountain', 'temperate', 20),
      ('Desert', 'dry', 30),
      ('Ocean', 'wet', 20);
    
    INSERT INTO monsters_habitats (monster_id, habitat_id)
    VALUES
      (1, 1),
      (2, 2),
      (3, 3),
      (4, 4),
      (5, 4);
  `)
}

exports.down = pgm => {}
