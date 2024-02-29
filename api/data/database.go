package data

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	connStr := "postgres://default:oytI8SGbuw3n@ep-green-hill-a157vjps-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
	data, err := gorm.Open(postgres.Open(connStr), &gorm.Config{})
	DB = data

	if err != nil {
		log.Fatal("Unable to connect to PostgreSQL")
	}
}