package com.example.demo.controller;

import com.example.demo.model.Patient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @GetMapping
    public ResponseEntity<List<Patient>> getPatients() {
        List<Patient> patients = Arrays.asList(
                new Patient(1, "Rahul", 22),
                new Patient(2, "Priya", 25),
                new Patient(3, "Amit", 30)
        );

        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addPatient(@RequestBody Patient patient) {
        System.out.println(patient.getName());
        return new ResponseEntity<>("Patient Added", HttpStatus.CREATED);
    }
}