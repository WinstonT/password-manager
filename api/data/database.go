package data

import (
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	connStr := os.Getenv("DATABASE_URL")
	data, err := gorm.Open(postgres.Open(connStr), &gorm.Config{})
	DB = data

	if err != nil {
		log.Fatal("Unable to connect to PostgreSQL")
	}
}