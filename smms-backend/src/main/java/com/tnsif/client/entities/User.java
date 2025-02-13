package com.tnsif.client.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String type;
	private String password;
	
	
	public User(Integer id, String name, String type, String password, Customer customer, MallAdmin mallAdmin,
			ShopOwner shopOwner) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.password = password;
//		this.customer = customer;
//		this.mallAdmin = mallAdmin;
//		this.shopOwner = shopOwner;
	}
	
	
	
	public User() {
		super();
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

//	public Customer getCustomer() {
//		return customer;
//	}
//
//
//	public void setCustomer(Customer customer) {
//		this.customer = customer;
//	}
//
//	public MallAdmin getMallAdmin() {
//		return mallAdmin;
//	}
//
//	public void setMallAdmin(MallAdmin mallAdmin) {
//		this.mallAdmin = mallAdmin;
//	}
//
//	public ShopOwner getShopOwner() {
//		return shopOwner;
//	}
//
//	public void setShopOwner(ShopOwner shopOwner) {
//		this.shopOwner = shopOwner;
//	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", type=" + type + ", password=" + password + "]";
	}

}
