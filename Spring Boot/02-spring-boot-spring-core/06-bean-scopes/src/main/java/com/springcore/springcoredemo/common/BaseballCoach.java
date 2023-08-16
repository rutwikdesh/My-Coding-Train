package com.springcore.springcoredemo.common;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

// To change the scope of a bean, we can use the following syntax.
// The prototype scope will create a new object instance for evey injection.
@Component
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class BaseballCoach implements Coach {

    public BaseballCoach() {
        System.out.println("Inside BaseBall Coach");
    }

    @Override
    public String getDailyWorkout(){

        return "Practice striking for 11mins :)";
    }
}
