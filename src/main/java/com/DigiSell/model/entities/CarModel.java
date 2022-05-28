package com.DigiSell.model.entities;

import com.DigiSell.enums.Typology;

import javax.persistence.*;

@Entity
@Table(name = "cars_models")
public class CarModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "model_generator")
    @SequenceGenerator(name = "model_generator", sequenceName = "models_id_seq",
            allocationSize = 1)
    private int id;
    @ManyToOne
    @JoinColumn(name = "manufacturer_id")
    private Manufacturer manufacturer;
    @Column(name = "name")
    private String name;
    @Enumerated(EnumType.STRING)
    @Column(name = "typology")
    private Typology typology;
    @Column(name = "price")
    private String price;
    @Column(name = "engine")
    private String engine;
    @Column(name = "cylinders")
    private int cylinders;
    @Column(name = "power")
    private String power;
    @Column(name = "max_speed")
    private String maxSpeed;
    @Column(name = "weight")
    private String weight;
    @Column(name = "image")
    private String image;

    public CarModel() {
    }

    public CarModel(int id, Manufacturer manufacturer, String name, Typology typology, String price, String engine,
                    int cylinders, String power, String maxSpeed, String weight, String image) {
        this.id = id;
        this.manufacturer = manufacturer;
        this.name = name;
        this.typology = typology;
        this.price = price;
        this.engine = engine;
        this.cylinders = cylinders;
        this.power = power;
        this.maxSpeed = maxSpeed;
        this.weight = weight;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Manufacturer getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Typology getTypology() {
        return typology;
    }

    public void setTypology(Typology typology) {
        this.typology = typology;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getEngine() {
        return engine;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

    public int getCylinders() {
        return cylinders;
    }

    public void setCylinders(int cylinders) {
        this.cylinders = cylinders;
    }

    public String getPower() {
        return power;
    }

    public void setPower(String power) {
        this.power = power;
    }

    public String getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(String maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}