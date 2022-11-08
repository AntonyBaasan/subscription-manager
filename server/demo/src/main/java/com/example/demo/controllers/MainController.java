package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class MainController {
    @RequestMapping("/hello")
    public String hello() {
        return "Hello world from Spring boot";
    }
}
