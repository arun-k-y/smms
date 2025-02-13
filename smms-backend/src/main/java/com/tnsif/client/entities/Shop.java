package com.tnsif.client.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

	
@Entity
public class Shop {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer shopId;
	private String shopCategory;
	private String shopName;
	private String shopStatus;
	private String leaseStatus;
	
	@OneToOne(cascade = CascadeType.ALL)
	@NotFound(action = NotFoundAction.IGNORE)
	private ShopOwner shopOwner;
	
	@OneToMany (cascade = CascadeType.ALL)
	@JoinColumn(referencedColumnName = "shopId")
	private List<Employee> shopEmployees;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(referencedColumnName = "shopId")
	private List<Item> items;
	
	public Shop() {
		super();
	}

	public Shop(Integer shopId, String shopCategory, List<Employee> shopEmployee, String shopName, String shopStatus,
			ShopOwner shopOwner, String leaseStatus, List<Item> items) {
		super();
		this.shopId = shopId;
		this.shopCategory = shopCategory;
		this.shopEmployees = shopEmployee;
		this.shopName = shopName;
		this.shopStatus = shopStatus;
		this.shopOwner = shopOwner;
		this.leaseStatus = leaseStatus;
		this.items = items;
	}
	
	public Integer getShopId() {
		return shopId;
	}
	
	public void setShopId(Integer shopId) {
		this.shopId = shopId;
	}
	
	public String getShopCategory() {
		return shopCategory;
	}

	public void setShopCategory(String shopCategory) {
		this.shopCategory = shopCategory;
	}

	public List<Employee> getShopEmployee() {
		return shopEmployees;
	}

	public void setShopEmployee(List<Employee> shopEmployee) {
		this.shopEmployees = shopEmployee;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getShopStatus() {
		return shopStatus;
	}

	public void setShopStatus(String shopStatus) {
		this.shopStatus = shopStatus;
	}

	public ShopOwner getShopOwner() {
		return shopOwner;
	}

	public void setShopOwner(ShopOwner shopOwner) {
		this.shopOwner = shopOwner;
	}

	public String getLeaseStatus() {
		return leaseStatus;
	}

	public void setLeaseStatus(String leaseStatus) {
		this.leaseStatus = leaseStatus;
	}

	public List<Item> getItems() {
		return items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}
	
	
	
	
}
