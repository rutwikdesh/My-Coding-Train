package com.springcore.springcoredemo.common;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component
public class TennisCoach implements Coach {
    public TennisCoach() {
        System.out.println("Inside TennisCoach");
    }
    @Override
    public String getDailyWorkout(){

        return "Practice sprinting for 12mins :)";
    }
}
