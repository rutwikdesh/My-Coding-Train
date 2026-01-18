package com.rd.springbootdemo.springbootdemo.hello;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FunRestController {
    // expose "/" that return "Hello World"

    @Value("${coach.name}")
    private String coachName;

    @Value("${team.name}")
    private String teamName;

    @GetMapping("/teaminfo")
    public String getTeamInfo(){
        return "My team: " + coachName + "Team Name: " + teamName;
    }

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
