package com.DigiSell.controllers;

import com.DigiSell.model.entities.Manufacturer;
import com.DigiSell.model.repositories.ManufacturerRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manufacturers")
@CrossOrigin(origins = "*")
public class ManufacturerController {
    private ManufacturerRepository manufacturerRepository;

    public ManufacturerController(ManufacturerRepository manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
    }

    @GetMapping("/")
    public Iterable<Manufacturer> showAllManufacturers() {
        return manufacturerRepository.findAll();
    }

}
