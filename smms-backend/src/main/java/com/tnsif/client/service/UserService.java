package com.tnsif.client.service;

import java.util.List;

import com.tnsif.client.entities.User;

public interface UserService {

	void addUser(User user);
	
	void updateUser(Integer id,User user);
	
	User searchUser(Integer id);
	
	void deleteUser(Integer id);

	List<User> listAllUsers();
}
