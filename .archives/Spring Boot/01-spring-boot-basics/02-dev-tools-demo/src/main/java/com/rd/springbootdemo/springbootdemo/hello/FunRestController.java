package com.rd.springbootdemo.springbootdemo.hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FunRestController {
    // expose "/" that return "Hello World"

    @GetMapping("/")
    public String sayHello(){
        return "Hello World";
    }

    @GetMapping("/workout")
    public String workingOut(){
        return "You are running 0.5km/min";
    }

    @GetMapping("/cycle")
    public String cycle(){
        return "You are cycling at 1.5km/min";
    }
}
