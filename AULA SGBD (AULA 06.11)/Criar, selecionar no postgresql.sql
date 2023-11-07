
CREATE TABLE instrumento (
  	id_instrumento SERIAL PRIMARY KEY,
  	nome VARCHAR(24) NOT NULL,
  	preco FLOAT NOT NULL,
  	em_promocao BOOLEAN
)

INSERT INTO instrumento
	(nome, preco, em_promocao)
VALUES
	('violão', 219.99, FALSE),
    ('piano', 599.99, TRUE)
    
SELECT * FROM instrumento

SELECT id_instrumento, nome FROM instrumento
SELECT id_instrumento, nome FROM instrumento WHERE (preco < 250)
SELECT em_promocao, id_instrumento, preco FROM instrumento

SELECT em_promocao, preco FROM instrumento WHERE (preco > 400)
SELECT * FROM instrumento WHERE (em_promocao = TRUE)
SELECT nome, preco FROM instrumento WHERE (id_instrumento = 6)
SELECT id_instrumento, preco, em_promocao, FROM instrumento WHERE (nome = 'violão')

---

CREATE TABLE vendedor (
  id_vendedor SERIAL PRIMARY KEY,
  nome VARCHAR(24) NOT NULL,
  idade INT NOT NULL,
  num_vendas INT NOT NULL
)
  
INSERT INTO vendedor
  	(nome, idade, num_vendas)
VALUES
	('Teste', 18, 52)
    
SELECT * FROM vendedor









CREATE TABLE instrumento (
  id_instrumento SERIAL PRIMARY,
  id_desconto_vendedor SERIAL FOREIGN KEY,
  nome VARCHAR(24) NOT NULL,
  preco FLOAT NOT NULL,
  em_promocao BOOLEAN
)

-- REPLICAR DEMONSTRAÇÃO E CRIAR UMA TABELA PARA ENTIDADE VENDEDOR.

CREATE TABLE vendedor (
  id_instrumento SERIAL FOREIGN KEY,
  id_vendedor SERIAL PRIMARY KEY,
  nome VARCHAR(24) NOT NULL,
  vendas INT(4) NOT NULL
  )