DROP DATABASE IF EXISTS timeCap_DB;

CREATE DATABASE timeCap_DB;

USE timeCap_db;

CREATE TABLE history (
  year INT,
  best_picture VARCHAR (250),
  song VARCHAR (250),
  president VARCHAR (250),
  census VARCHAR (250),
  super_bowl VARCHAR (250),
  world_series VARCHAR (250),

  PRIMARY KEY (year)
);



