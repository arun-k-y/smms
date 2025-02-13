package com.tnsif.client.service;

import java.util.List;

import com.tnsif.client.entities.Shop;

public interface ShopService {

	void addShop(Shop shop);
	
	void updateShop(Integer id,Shop shop);
	
	Shop searchShop(Integer id);
	
	void deleteShop(Integer id);

	List<Shop> listAllShops();
}
