package com.tnsif.client.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnsif.client.entities.User;
import com.tnsif.client.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void addUser(User user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
	}

	@Override
	public void updateUser(Integer id, User user) {
		// TODO Auto-generated method stub
		User updateUser = this.searchUser(id);
		updateUser.setName(user.getName());
		updateUser.setPassword(user.getPassword());
		updateUser.setType(user.getType());
		this.addUser(updateUser);
	}

	@Override
	public User searchUser(Integer id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id).get();
	}

	@Override
	public void deleteUser(Integer id) {
		// TODO Auto-generated method stub
		userRepository.deleteById(id);
	}

	@Override
	public List<User> listAllUsers() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

}
