package com.DigiSell.controllers;

import com.DigiSell.model.entities.CarModel;
import com.DigiSell.model.repositories.CarModelRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/models")
@CrossOrigin(origins = "*")
public class CarModelController {
    private CarModelRepository modelRepository;

    public CarModelController(CarModelRepository modelRepository) {
        this.modelRepository = modelRepository;
    }

    @GetMapping("/")
    public Iterable<CarModel> showAllModels() {
        return modelRepository.findAll();
    }

}