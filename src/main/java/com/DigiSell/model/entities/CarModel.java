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
    private double price;
    @Column(name = "engine")
    private double engine;
    @Column(name = "cylinders")
    private int cylinders;
    @Column(name = "power")
    private int power;
    @Column(name = "max_speed")
    private int maxSpeed;
    @Column(name = "weight")
    private int weight;
    @Column(name = "image")
    private String image;

    public CarModel() {
    }

    public CarModel(int id, Manufacturer manufacturer, String name, Typology typology,
                    double price, double engine, int cylinders, int power, int maxSpeed,
                    int weight, String image) {
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getEngine() {
        return engine;
    }

    public void setEngine(double engine) {
        this.engine = engine;
    }

    public int getCylinders() {
        return cylinders;
    }

    public void setCylinders(int cylinders) {
        this.cylinders = cylinders;
    }

    public int getPower() {
        return power;
    }

    public void setPower(int power) {
        this.power = power;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}