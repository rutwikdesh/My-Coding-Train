package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
//@Scope(value = "prototype")
public class Flash {
    @Autowired
    public Laptop Lappy;

    public Flash(){
        System.out.println("object created");
    }
    public void show(){
        System.out.println("Hi");
        Lappy.compile();
    }

    public void setLappy(Laptop Laptop){
        this.Lappy = Laptop;
    }

    public Laptop getLappy(){
        return this.Lappy;
    }
}
