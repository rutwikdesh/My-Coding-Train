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

    @Override
    public String getDailyWorkout(){
        return "Practice striking for 11mins :)";
    }



}
