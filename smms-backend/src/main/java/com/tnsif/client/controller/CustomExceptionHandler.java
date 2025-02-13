package com.tnsif.client.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.tnsif.client.service.ShopNotFoundException;

@RestControllerAdvice
public class CustomExceptionHandler {
	
	@ExceptionHandler(ShopNotFoundException.class)
	public ResponseEntity<String> handleShopNotFoundException(ShopNotFoundException snfe){
		return new ResponseEntity<String>(snfe.getMessage(), HttpStatus.NOT_FOUND);	
	}
}
