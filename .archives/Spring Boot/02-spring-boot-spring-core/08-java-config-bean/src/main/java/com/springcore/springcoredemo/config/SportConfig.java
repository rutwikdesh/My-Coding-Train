package com.springcore.springcoredemo.config;

import com.springcore.springcoredemo.common.Coach;
import com.springcore.springcoredemo.common.SwimCoach;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// Creating a config for allowing 3rd party beans
@Configuration
public class SportConfig {

//  @Bean("aquatic")
// Using the above syntax, we can give the bean a custom ID.
    @Bean
    public Coach swimCoach(){
        return new SwimCoach();
    }
}
