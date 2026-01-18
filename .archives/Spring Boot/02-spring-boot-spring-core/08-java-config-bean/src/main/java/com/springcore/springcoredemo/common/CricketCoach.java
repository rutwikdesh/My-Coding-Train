package com.springcore.springcoredemo.common;

import org.springframework.stereotype.Component;

@Component
public class CricketCoach implements Coach {
    public CricketCoach() {
        System.out.println("Inside CricketCoach");
    }

    @Override
    public String getDailyWorkout(){
        return "Practice fast bowling for 13mins :)";
    }
}
