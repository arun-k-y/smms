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

import com.tnsif.client.entities.User;
import com.tnsif.client.service.UserService;

@RestController
@RequestMapping("user")
public class UserController {

	@Autowired
	private UserService service;
		
	@GetMapping("/list")
	public List<User> getAllUsers(){
		return service.listAllUsers();
	}
	
	@GetMapping("/search/{id}")
	public ResponseEntity<?> searchUser(@PathVariable Integer id) {
		// TODO Auto-generated method stub
		try {
		    User user = service.searchUser(id);
		    return new ResponseEntity<User>(user, HttpStatus.OK);
		}
		catch(NoSuchElementException e) {
			return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
		}
	}	
	
	@PostMapping("/create")
	public void createUser(@RequestBody User user) {
		service.addUser(user);
	}	
	
	@DeleteMapping("/delete/{id}")
	public void deleteUserById(@PathVariable Integer id) {
		service.deleteUser(id);
	}
	
	@PutMapping("/update/{id}")
	public void updateUser(@PathVariable Integer id,@RequestBody User user){
		service.updateUser(id, user);
	}
}
