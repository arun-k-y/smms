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

import com.tnsif.client.service.ShopOwnerService;
import com.tnsif.client.entities.ShopOwner;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("shop_owner")
public class ShopOwnerController {
	
	@Autowired
	private ShopOwnerService service;
	
	@GetMapping("/list")
	public List<ShopOwner> getAllShopOwners(){
		return service.listAllShopOwners();
	}
	
	@PostMapping("/create")
	public ResponseEntity<String> createShopOwner(@RequestBody ShopOwner shopOwner) {
		service.addShopOwner(shopOwner);
		return new ResponseEntity<String>("Shop owner Added", HttpStatus.OK);
	}
	
	@GetMapping("/search/{id}")
	public ResponseEntity<ShopOwner> getShopOwnerById(@PathVariable Integer id){
		ShopOwner owner = service.searchShopOwner(id);
		return new ResponseEntity<ShopOwner>(owner, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteShopOwnerById(@PathVariable Integer id) {
		service.deleteShopOwner(id);
		return new ResponseEntity<String>("Shop owner "+id+" Deleted", HttpStatus.OK);

	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateShopOwner(@PathVariable Integer id,@RequestBody ShopOwner shopOwner) {
		service.updateShopOwner(id, shopOwner);
		return new ResponseEntity<String>("Shop owner "+id+" Updated", HttpStatus.OK);

	}
}
