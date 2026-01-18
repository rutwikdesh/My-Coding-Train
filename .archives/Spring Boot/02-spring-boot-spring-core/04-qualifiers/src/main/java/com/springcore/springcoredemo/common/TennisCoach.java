package com.springcore.springcoredemo.common;

import org.springframework.stereotype.Component;

@Component
public class TennisCoach implements Coach {
    @Override
    public String getDailyWorkout(){

        return "Practice sprinting for 12mins :)";
    }
}
