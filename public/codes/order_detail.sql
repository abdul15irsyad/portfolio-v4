CREATE TABLE IF NOT EXISTS `order_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT fk_product FOREIGN KEY (`product_id`) REFERENCES `product`(`id`)
);

INSERT INTO order_detail (id,order_id,product_id,quantity) VALUES
  (1,1,1,2),
  (2,1,5,1),
  (3,1,10,3),
  (4,2,15,1),
  (5,2,20,2),
  (6,3,22,1),
  (7,3,28,5),
  (8,4,35,2),
  (9,4,36,4),
  (10,5,38,3),
  (11,5,42,1),
  (12,6,48,2),
  (13,6,50,1),
  (14,7,2,6),
  (15,7,8,4),
  (16,8,12,1),
  (17,8,18,2),
  (18,9,21,3),
  (19,9,25,1),
  (20,10,33,2);
