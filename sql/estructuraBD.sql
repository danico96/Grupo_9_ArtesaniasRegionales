-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema artisanMarket
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema artisanMarket
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `artisanMarket` DEFAULT CHARACTER SET latin1 ;
USE `artisanMarket` ;

-- -----------------------------------------------------
-- Table `artisanMarket`.`regions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artisanMarket`.`regions` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `region` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `artisanMarket`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artisanMarket`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `price` INT NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `quantity` INT NOT NULL,
  `picture` VARCHAR(100) NULL,
  `regions_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `regions_id`),
  INDEX `fk_products_regions1_idx` (`regions_id` ASC),
  CONSTRAINT `fk_products_regions1`
    FOREIGN KEY (`regions_id`)
    REFERENCES `artisanMarket`.`regions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `artisanMarket`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artisanMarket`.`roles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `roleName` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `artisanMarket`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `artisanMarket`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `image` VARCHAR(100) NULL,
  `roles_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `roles_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  INDEX `fk_users_roles1_idx` (`roles_id` ASC),
  CONSTRAINT `fk_users_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `artisanMarket`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
