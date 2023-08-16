package com.springcore.springcoredemo.common;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


// Here we have marked the TennisCoach as Lazy, so it would only be initialized
// if it is required during startup of the application
@Component
@Lazy
public class TennisCoach implements Coach {
    public TennisCoach() {
        System.out.println("Inside TennisCoach");
    }
    @Override
    public String getDailyWorkout(){

        return "Practice sprinting for 12mins :)";
    }
}
