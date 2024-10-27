package main

import (
    "github.com/gin-gonic/gin"
)

func main() {
    // Create a new Gin router
    router := gin.Default()

    // Define a simple GET route
    router.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "Welcome to the Gin framework!",
        })
    })

    // Run the server on port 8080
    router.Run(":8080")
}
