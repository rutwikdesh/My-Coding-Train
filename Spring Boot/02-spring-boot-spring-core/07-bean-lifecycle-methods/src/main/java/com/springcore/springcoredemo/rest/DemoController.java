package com.springcore.springcoredemo.rest;

import com.springcore.springcoredemo.common.Coach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    private Coach myCoach;

    // Using the Qualifier annotation we are specifying that we only want the
    // trackCoach bean to get invoked or used

    // We can also use the primary annotation, but the Qualifier annotation has
    // higher priority

    @Autowired
    public DemoController(@Qualifier("baseballCoach") Coach theCoach){
        System.out.println("Inside " + getClass().getSimpleName());
        myCoach = theCoach;
    }

    @GetMapping("/dailyworkout")
    public String getDailyWorkout(){

        return myCoach.getDailyWorkout();
    }
}
