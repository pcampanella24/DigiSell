package com.DigiSell.model.repositories;

import com.DigiSell.model.entities.Manufacturer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, Integer> {
}
