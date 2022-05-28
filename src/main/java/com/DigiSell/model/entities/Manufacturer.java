package com.DigiSell.model.entities;

import javax.persistence.*;

@Entity
@Table(name = "manufacturers")
public class Manufacturer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "manufacturer_generator")
    @SequenceGenerator(name = "manufacturer_generator", sequenceName = "manufacturers_id_seq",
            allocationSize = 1)
    private int id;
    @Column(name = "name")
    private String name;

    public Manufacturer() {
    }

    public Manufacturer(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
