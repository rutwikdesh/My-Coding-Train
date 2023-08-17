package com.springcore.springcoredemo.common;

// Not using the @Component annotation to make SwimCoach (a 3rd party class)
// a java bean
public class SwimCoach implements Coach {
    public SwimCoach(){
        System.out.println("In Constructor: SwimCoach");
    }

    @Override
    public String getDailyWorkout() {
        return "Swim 120 meters daily";
    }
}
