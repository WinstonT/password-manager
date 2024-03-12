package controllers

import (
	"regexp"

	"github.com/WinstonT/password-manager/data"
	"github.com/WinstonT/password-manager/models"
	"github.com/gin-gonic/gin"
)

func GetAllEntries(c *gin.Context) {
	var entries []models.Entry
	result := data.DB.Order("Website asc").Find(&entries)

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

	regex := `^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$`

	match, _ := regexp.MatchString(regex, body.Website)

	if !match || len(body.Username) < 5 || len(body.Password) < 5 {
		c.JSON(400, gin.H{
			"error": "Incorrect format",
		})
		return
	}

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
	savedEntry := data.DB.First(&entry, body.ID)

	if savedEntry.Error != nil {
		c.JSON(404, gin.H{
			"error": "Data not found",
		})
		return
	}

	updatedEntry := data.DB.Model(&entry).Updates(models.Entry{Website: body.Website, Username: body.Username, Password: body.Password})

	if updatedEntry.Error != nil {
		c.Status(400)
		return
	}
	
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

	deletedEntry := data.DB.Delete(&models.Entry{}, body.ID)

	if deletedEntry.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"result": "Successfully deleted entry",
	})
}