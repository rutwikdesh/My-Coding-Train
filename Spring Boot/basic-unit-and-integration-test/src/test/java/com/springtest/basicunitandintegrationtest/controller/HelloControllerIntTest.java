package com.springtest.basicunitandintegrationtest.controller;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import javax.swing.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

@ExtendWith(SpringExtension.class)
@WebMvcTest(HelloController.class)
class HelloControllerIntTest {

    @Autowired
    private MockMvc mvc;
    @Test
    void hello() throws Exception {
        RequestBuilder request = get("/hello");
        MvcResult result = mvc.perform(request).andReturn();
        assertEquals("Hello, world", result.getResponse().getContentAsString());
    }

    // alternative option for above test
    @Test
    public void testHelloWithName() throws Exception {
        mvc.perform(get("/hello?name=Tom"))
                .andExpect(content().string("Hello, Tom"));
    }
}