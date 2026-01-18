package com.springtest.basicunitandintegrationtest.controller;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class HelloControllerTest {

    @Test
    void hello() {
        HelloController helloController = new HelloController(); // Arrange
        String response = helloController.hello("world"); // Act
        assertEquals("Hello, world", response); // Assert
    }

}