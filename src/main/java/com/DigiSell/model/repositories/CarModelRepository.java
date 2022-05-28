package com.DigiSell.model.repositories;

import com.DigiSell.model.entities.CarModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CarModelRepository extends JpaRepository<CarModel, Integer> {
}
