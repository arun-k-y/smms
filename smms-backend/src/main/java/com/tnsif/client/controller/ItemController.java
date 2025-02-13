package com.tnsif.client.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tnsif.client.entities.Item;
import com.tnsif.client.service.ItemService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("item")
public class ItemController {

	@Autowired
	private ItemService service;
	
	@GetMapping("/list")
	public List<Item> getAllShopOwners(){
		return service.listAllItems();
	}
	
	@PostMapping("/create")
	public ResponseEntity<String> createItem(@RequestBody Item item) {
		service.addItem(item);
		return new ResponseEntity<String>("Item Added", HttpStatus.OK);
	}
	
	@GetMapping("/search/{id}")
	public ResponseEntity<Item> getShopOwnerById(@PathVariable Integer id){
		Item item = service.searchItem(id);
		return new ResponseEntity<Item>(item, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteShopOwnerById(@PathVariable Integer id) {
		service.deleteItem(id);
		return new ResponseEntity<String>("Item "+id+" Deleted", HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateShopOwner(@PathVariable Integer id,@RequestBody Item item) {
		service.updateItem(id, item);
		return new ResponseEntity<String>("Item "+id+"Updated", HttpStatus.OK);

	}
}
