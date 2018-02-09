CREATE TABLE IF NOT EXISTS `user` (
    `id` INT(12) NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(255) DEFAULT NULL,
    `mobile` BIGINT(13) DEFAULT NULL,
    `email` TEXT(255) DEFAULT NULL,
    `password` VARCHAR(255) DEFAULT NULL,
    `sex` TINYINT(2) DEFAULT NULL,
    `signature` TEXT(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user` VALUES (
    0,'cuvee',18280133086,'cuizaiyong@bluestonehk.com','123456','1','双手成就梦想'
)