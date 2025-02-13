package com.tnsif.client.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tnsif.client.entities.Mall;
import com.tnsif.client.service.MallService;

@RestController
@RequestMapping("mall")
public class MallController {

	@Autowired
	private MallService service;
		
	@GetMapping("/list")
	public List<Mall> getAllMalls(){
		return service.listAllMalls();
	}
	
	@GetMapping("/search/{id}")
	public ResponseEntity<Mall> getMallById(@PathVariable Integer id){
		Mall mall = service.searchMall(id);
		return new ResponseEntity<Mall>(mall, HttpStatus.OK);
	}	
	
	@PostMapping("/create")
	public void createMall(@RequestBody Mall mall) {
		service.addMall(mall);
	}	
	
	@DeleteMapping("/delete/{id}")
	public void deleteMallById(@PathVariable Integer id) {
		service.deleteMall(id);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateMall(@PathVariable Integer id,@RequestBody Mall mall){
		try {
			service.updateMall(id, mall);
			return new ResponseEntity<>("Mall updated", HttpStatus.OK);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			return new ResponseEntity<>("Mall not found", HttpStatus.NOT_FOUND);
		}
	}
}
