package com.tnsif.client.service;

import java.util.List;

import com.tnsif.client.entities.Mall;

public interface MallService {

	void addMall(Mall mall);
	
	void updateMall(Integer id,Mall mall);
	
	Mall searchMall(Integer id);
	
	void deleteMall(Integer id);

	List<Mall> listAllMalls();
}
