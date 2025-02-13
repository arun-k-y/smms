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

import com.tnsif.client.entities.MallAdmin;
import com.tnsif.client.service.MallAdminService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("mallAdmin")
public class MallAdminController {

	@Autowired
	private MallAdminService service;
		
	@GetMapping("/list")
	public List<MallAdmin> getAllMallAdmins(){
		return service.listAllMallAdmins();
	}
	
	
	
	@GetMapping("/search/{id}")
	public ResponseEntity<MallAdmin> getMallAdminById(@PathVariable Integer id){
		MallAdmin mallAdmin = service.searchMallAdmin(id);
		return new ResponseEntity<MallAdmin>(mallAdmin, HttpStatus.OK);
	}	
	
	@PostMapping("/create")
	public void createMallAdmin(@RequestBody MallAdmin mallAdmin) {
		service.addMallAdmin(mallAdmin);
	}	
	
	@DeleteMapping("/delete/{id}")
	public void deleteMallAdminById(@PathVariable Integer id) {
		service.deleteMallAdmin(id);
	}
	
	@PutMapping("/update/{id}")
	public void updateMallAdmin(@PathVariable Integer id,@RequestBody MallAdmin mallAdmin){
		service.updateMallAdmin(id, mallAdmin);
	}
}
