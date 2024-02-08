CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT
);

INSERT INTO articles (title, description) VALUES ('Olala', 'je suis un article');
INSERT INTO articles (title, description) VALUES ('Pouloulou', 'je suis un deuxieme article de bdd tres interessant');
INSERT INTO articles (title, description) VALUES ('Okey', 'Je suis le troisieme article');