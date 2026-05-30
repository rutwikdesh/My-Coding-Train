package com.springcore.springcoredemo.common;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Component;

// To change the scope of a bean, we can use the following syntax.
// The prototype scope will create a new object instance for evey injection.
@Component
public class BaseballCoach implements Coach {

    public BaseballCoach() {
        System.out.println("Inside BaseBall Coach");
    }

    // Defining our init method
    @PostConstruct
    public void doMyStartup(){
        System.out.println("In doMyStartup");
    }

    // Defining out destroy method
    @PreDestroy
    public void doMyCleanup(){
        System.out.println("In doMyCleanup");
    }

    @Override
    public String getDailyWorkout(){
        return "Practice striking for 11mins :)";
    }



}
