package com.tnsif.client.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnsif.client.entities.MallAdmin;
import com.tnsif.client.repository.MallAdminRepository;

@Service
@Transactional
public class MallAdminServiceImpl implements MallAdminService {

	@Autowired
	private MallAdminRepository mallAdminRepository;
	
	@Override
	public void addMallAdmin(MallAdmin mallAdmin) {
		// TODO Auto-generated method stub
		mallAdminRepository.save(mallAdmin);
	}

	@Override
	public void updateMallAdmin(Integer id, MallAdmin mallAdmin) {
		// TODO Auto-generated method stub
		MallAdmin updateMallAdmin = this.searchMallAdmin(id);
		updateMallAdmin.setName(mallAdmin.getName());
		updateMallAdmin.setPassword(mallAdmin.getPassword());
		updateMallAdmin.setPhone(mallAdmin.getPhone());
		this.addMallAdmin(updateMallAdmin);
	}

	@Override
	public MallAdmin searchMallAdmin(Integer id) {
		// TODO Auto-generated method stub
		return mallAdminRepository.findById(id).get();
	}

	@Override
	public void deleteMallAdmin(Integer id) {
		// TODO Auto-generated method stub
		mallAdminRepository.deleteById(id);
	}

	@Override
	public List<MallAdmin> listAllMallAdmins() {
		// TODO Auto-generated method stub
		return mallAdminRepository.findAll();
	}

}
