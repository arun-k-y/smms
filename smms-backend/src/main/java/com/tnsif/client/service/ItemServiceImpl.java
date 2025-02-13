package com.tnsif.client.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnsif.client.entities.Item;
import com.tnsif.client.repository.ItemRepository;


@Service
@Transactional
public class ItemServiceImpl implements ItemService {

	@Autowired
	private ItemRepository repo;
	
	@Override
	public void addItem(Item item) {
		// TODO Auto-generated method stub
		repo.save(item);
	}

	@Override
	public void updateItem(Integer id, Item item) {
		// TODO Auto-generated method stub
		 Item updateItem = this.searchItem(id);
		 updateItem.setCategory(item.getCategory());
		 updateItem.setExpiry(item.getExpiry());
		 updateItem.setManufacturing(item.getManufacturing());
		 updateItem.setName(item.getName());
		 updateItem.setPrice(item.getPrice());
		// updateItem.setShop(item.getShop());
		 this.addItem(updateItem);
	}

	@Override
	public Item searchItem(Integer id) {
		// TODO Auto-generated method stub
		return repo.findById(id).get();
	}

	@Override
	public void deleteItem(Integer id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}

	@Override
	public List<Item> listAllItems() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	


}
