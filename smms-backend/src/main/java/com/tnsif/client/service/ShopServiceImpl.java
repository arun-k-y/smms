package com.tnsif.client.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnsif.client.entities.Shop;
import com.tnsif.client.repository.ShopRepository;

@Service
@Transactional
public class ShopServiceImpl implements ShopService{

	@Autowired
	private ShopRepository repo;
	
	@Override
	public void addShop(Shop shop) {
		// TODO Auto-generated method stub
		repo.save(shop);
	}

	@Override
	public void updateShop(Integer id, Shop shop) {
		// TODO Auto-generated method stub
		Shop updateShop = this.searchShop(id);
		 updateShop.setItems(shop.getItems());
		 updateShop.setLeaseStatus(shop.getLeaseStatus());
		 updateShop.setShopCategory(shop.getShopCategory());
		 updateShop.setShopEmployee(shop.getShopEmployee());
		 updateShop.setShopName(shop.getShopName());
		 updateShop.setShopOwner(shop.getShopOwner());
		 updateShop.setShopStatus(shop.getShopStatus());
		 this.addShop(updateShop);
	}

	@Override
	public Shop searchShop(Integer id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElseThrow(()-> new ShopNotFoundException("asghgs ahgs gsh"));
	}

	@Override
	public void deleteShop(Integer id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}

	@Override
	public List<Shop> listAllShops() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}
	
}
