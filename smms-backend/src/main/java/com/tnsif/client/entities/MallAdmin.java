package com.tnsif.client.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MallAdmin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String password;
	private String phone;
	
//	@OneToOne(cascade = CascadeType.ALL, mappedBy = "mallAdmin")
//	private Mall mall;
	
//	@OneToOne(cascade = CascadeType.ALL)
//	private ShopOwner shopOwner;
//	
//	@OneToOne(cascade = CascadeType.ALL)
//	private User user;

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


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


//	public Mall getMall() {
//		return mall;
//	}
//
//
//	public void setMall(Mall mall) {
//		this.mall = mall;
//	}


//	public ShopOwner getShopOwner() {
//		return shopOwner;
//	}
//
//
//	public void setShopOwner(ShopOwner shopOwner) {
//		this.shopOwner = shopOwner;
//	}
//
//
//	public User getUser() {
//		return user;
//	}
//
//
//	public void setUser(User user) {
//		this.user = user;
//	}


//	@Override
//	public String toString() {
//		return "MallAdmin [id=" + id + ", name=" + name + ", password=" + password + ", mall=" + mall + ", phone="
//				+ phone + "]";
//	}
	
	
	
}
