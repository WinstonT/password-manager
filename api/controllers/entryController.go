package controllers

import (
	"github.com/WinstonT/password-manager/data"
	"github.com/WinstonT/password-manager/models"
	"github.com/gin-gonic/gin"
)

func GetAllEntries(c *gin.Context) {
	var entries []models.Entry
	result := data.DB.Find(&entries)

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"entries": entries,
	})
}

func CreateEntry(c *gin.Context) {
	var body struct {
		Website string
		Username string
		Password string
	}

	c.Bind(&body)

	entry := models.Entry{Website: body.Website, Username: body.Username, Password: body.Password}
	result := data.DB.Create(&entry)

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"entry": entry,
	})
}

func EditEntry(c *gin.Context) {
	var body struct {
		ID int32
		Website string
		Username string
		Password string
	}

	c.Bind(&body)

	var entry models.Entry
	data.DB.First(&entry, body.ID)

	updatedEntry := data.DB.Model(&entry).Updates(models.Entry{Website: body.Website, Username: body.Username, Password: body.Password})
	
	c.JSON(200, gin.H{
		"entry": updatedEntry,
	})
}

func DeleteEntry(c *gin.Context) {
	var body struct {
		ID int32
	}

	c.Bind(&body)

	var entry models.Entry
	data.DB.First(&entry, body.ID)

	data.DB.Delete(&models.Entry{}, body.ID)

	c.JSON(200, gin.H{
		"result": "Successfully deleted entry",
	})
}