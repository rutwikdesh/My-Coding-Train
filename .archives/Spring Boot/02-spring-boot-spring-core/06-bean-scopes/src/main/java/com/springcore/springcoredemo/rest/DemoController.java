package com.springcore.springcoredemo.rest;

import com.springcore.springcoredemo.common.Coach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    private Coach myCoach;
    private Coach anotherCoach;

    // Using the Qualifier annotation we are specifying that we only want the
    // trackCoach bean to get invoked or used

    // We can also use the primary annotation, but the Qualifier annotation has
    // higher priority

    @Autowired
    public DemoController(@Qualifier("baseballCoach") Coach theCoach,
                          @Qualifier("baseballCoach") Coach theAnotherCoach){
        System.out.println("Inside " + getClass().getSimpleName());
        myCoach = theCoach;
        anotherCoach = theAnotherCoach;
    }

    @GetMapping("/dailyworkout")
    public String getDailyWorkout(){

        return myCoach.getDailyWorkout();
    }

    // The default scope for a bean is singleton, which means the same object instance
    // will be used for each injection.

    // Bean Lifecycle:
    // Bean Instantiated ---> Dependencies Injected ---> Internal Spring Processing
    // ---> Your custom init method
    @GetMapping("/check")
    public String check()
    {
        return "Comparing beans " + (myCoach == anotherCoach);
    }
}
