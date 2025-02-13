package com.tnsif.client.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnsif.client.entities.Mall;
import com.tnsif.client.repository.MallRepository;

@Service
@Transactional
public class MallServiceImpl implements MallService {

	@Autowired
	private MallRepository mallRepository;
	
	@Override
	public void addMall(Mall mall) {
		// TODO Auto-generated method stub
		mallRepository.save(mall);
	}

	@Override
	public void updateMall(Integer id, Mall mall) {
		// TODO Auto-generated method stub
		Mall updateMall = this.searchMall(id);
		updateMall.setCategories(mall.getCategories());
		updateMall.setLocation(mall.getLocation());
		updateMall.setMallAdmin(mall.getMallAdmin());
		updateMall.setMallName(mall.getMallName());
		this.addMall(updateMall);
	}

	@Override
	public Mall searchMall(Integer id) {
		// TODO Auto-generated method stub
		return mallRepository.findById(id).get();
	}

	@Override
	public void deleteMall(Integer id) {
		// TODO Auto-generated method stub
		mallRepository.deleteById(id);
	}

	@Override
	public List<Mall> listAllMalls() {
		// TODO Auto-generated method stub
		return mallRepository.findAll();
	}

}
