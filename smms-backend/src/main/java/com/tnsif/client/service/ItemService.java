package com.tnsif.client.service;

import java.util.List;

import com.tnsif.client.entities.Item;

public interface ItemService {

	void addItem(Item item);
	
	void updateItem(Integer id,Item item);
	
	Item searchItem(Integer id);
	
	void deleteItem(Integer id);
	
	List<Item> listAllItems();
}
