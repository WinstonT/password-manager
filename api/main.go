package main

import (
	"github.com/WinstonT/password-manager/controllers"
	"github.com/WinstonT/password-manager/data"
	"github.com/gin-gonic/gin"
)

func init() {
	data.ConnectDB()
}

func main() {

	router := gin.Default()
	router.GET("/", controllers.GetAllEntries)
	router.POST("/", controllers.CreateEntry)
	router.PUT("/", controllers.EditEntry)
	router.DELETE("/", controllers.DeleteEntry)
	router.Run()
}