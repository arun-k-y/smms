package com.tnsif.client.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Item {
			
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private LocalDate manufacturing;
	private LocalDate expiry;
	private Float price;
	private String category;
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	@Autowired
//	private Shop shop;
		
	public Item() {
		super();
	}

	public Item(Integer id, String name, LocalDate manufacturing, LocalDate expiry, Float price, String category) {
		super();
		this.id = id;
		this.name = name;
		this.manufacturing = manufacturing;
		this.expiry = expiry;
		this.price = price;
		this.category = category;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getManufacturing() {
		return manufacturing;
	}

	public void setManufacturing(LocalDate manufacturing) {
		this.manufacturing = manufacturing;
	}

	public LocalDate getExpiry() {
		return expiry;
	}

	public void setExpiry(LocalDate expiry) {
		this.expiry = expiry;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
						

	
	
	
	
	
}
