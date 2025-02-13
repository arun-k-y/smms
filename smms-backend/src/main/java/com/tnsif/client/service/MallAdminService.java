package com.tnsif.client.service;

import java.util.List;

import com.tnsif.client.entities.MallAdmin;

public interface MallAdminService {
	
	void addMallAdmin(MallAdmin mallAdmin);
	
	void updateMallAdmin(Integer id,MallAdmin mallAdmin);
	
	MallAdmin searchMallAdmin(Integer id);
	
	void deleteMallAdmin(Integer id);

	List<MallAdmin> listAllMallAdmins();
}
