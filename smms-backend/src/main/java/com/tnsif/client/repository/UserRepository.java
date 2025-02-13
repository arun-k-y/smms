package com.tnsif.client.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tnsif.client.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
}
