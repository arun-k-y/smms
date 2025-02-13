package com.tnsif.client.service;

public class ShopNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	ShopNotFoundException(){
		super();
	}
	
	ShopNotFoundException(String msg){
		super(msg);
	}
}
