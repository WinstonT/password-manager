package models

import "gorm.io/gorm"

type Entry struct {
	gorm.Model
	ID int32
	Website string
	Username string
	Password string
}