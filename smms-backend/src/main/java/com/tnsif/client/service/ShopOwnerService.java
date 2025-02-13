package com.tnsif.client.service;

import java.util.List;

import com.tnsif.client.entities.ShopOwner;

public interface ShopOwnerService {

	void addShopOwner(ShopOwner shopOwner);
	
	void updateShopOwner(Integer id,ShopOwner shopOwner);
	
	ShopOwner searchShopOwner(Integer id);
	
	void deleteShopOwner(Integer id);

	List<ShopOwner> listAllShopOwners();
}
