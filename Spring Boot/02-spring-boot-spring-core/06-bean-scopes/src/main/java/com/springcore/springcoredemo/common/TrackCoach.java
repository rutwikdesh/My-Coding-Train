package com.springcore.springcoredemo.common;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;


// Using the primary annotation to make this bean as the primary priority in
// case of multiple beans
@Component
@Primary
public class TrackCoach implements Coach {

    public TrackCoach() {
        System.out.println("Inside TrackCoach");
    }
    @Override
    public String getDailyWorkout(){
        return "Practice track sprint for 19mins :)";
    }
}
