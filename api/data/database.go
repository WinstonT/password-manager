package data

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	connStr := "user=postgres password=postgres dbname=password_manager port=5432 sslmode=disable TimeZone=Asia/Jakarta"
	data, err := gorm.Open(postgres.Open(connStr), &gorm.Config{})
	DB = data

	if err != nil {
		log.Fatal("Unable to connect to PostgreSQL")
	}
}