DROP DATABASE IF EXISTS timeCap_DB;

CREATE DATABASE timeCap_DB;

USE timeCap_db;

CREATE TABLE decades (
  id INT NOT NULL AUTO_INCREMENT,
  user_name TEXT NOT NULL,
  decade VARCHAR (4),
  topic VARCHAR (250) NOT NULL,
  title_tag VARCHAR (250),
  user_text TEXT,
  user_picture TEXT,
  PRIMARY KEY (id)
);


USE timeCap_DB;

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Sunny", "1960", "trends", "I remember...", "rocking out to 'The Who' singing 'My Generation' at Woodstock");

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Nelson", "1960", "tv", "I remember...", "having a major crush on Barbara Eden from 'I Dream of Jeannie'");

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Farrah", "1970", "music", "I remember...", "well kinda remember, dancing all night at Studio 54 to all of the best disco music -- ABBA, Donna Summer, The Village People, and the Bee Gees.
");

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Loni", "1970", "fashion", "I wish I could forget...", "the plaid, so much plaid -- My dad's brown plaid suite -- My purple and red plaid bell bottoms with matching vest -- What were we thinking?");

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Bear", "1970", "trends", "I remember...", "before cell phones there were CB radios.  For some reason, we thought it was cool to be outlaw truckers and say '10-4 good buddy'");

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Sarah", "1980", "movies", "I remember...", "the movies.  All of my favorite movies were made in the 80s: 'E.T.', 'Breakfast Club', 'Raiders of the Lost Ark', and 'Ferris Bueller's Day Off'.");

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Kyle", "1980", "trends", "I wish I could forget...", "finding out there was no Santa when I caught my Dad playing the Nintendo he bought us on Christmas Eve");

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Alicia", "1990", "tv", "I wish I could forget...", "'The Real World' on MTV.  It was the beginning of my reality show addiction.");

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Drew", "1990", "history", "I remember...", "how amazing it was to see the reunification of East and West Germany. It was hard to believe the Cold War with Russia was finally ending.");

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Plankton", "2000", "tv", "I remember...", "he lived in a pineapple under the sea -- Spongebob Squarepants.  Meet you at the Krusty Krab.");

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Vanessa", "2000", "trends", "I remember...", "my first iPod. Best gift ever! All of my music in one device. Die Walkman, die!");

INSERT INTO decades (user_name, decade, topic, title_tag, user_text)
VALUES ("Candace", "2010", "fashion", "I remember...", "my Mom trying to throw away my leggings. 'Leggings are not pants', she said.  Except when they're jeggings.  Back off, Mom!");