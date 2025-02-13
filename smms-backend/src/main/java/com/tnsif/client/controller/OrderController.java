package com.tnsif.client.controller;

import java.util.List;

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

import com.tnsif.client.entities.OrderDetails;
import com.tnsif.client.service.OrderService;

@RestController
@RequestMapping("order")
public class OrderController {

	@Autowired
	private OrderService service;
		
	@GetMapping("/list")
	public List<OrderDetails> getAllOrders(){
		return service.listAllOrders();
	}
	
	@GetMapping("/search/{id}")
	public ResponseEntity<OrderDetails> getOrderById(@PathVariable Integer id){
		OrderDetails order = service.searchOrder(id);
		return new ResponseEntity<OrderDetails>(order, HttpStatus.OK);
	}	
	
	@PostMapping("/create")
	public void createOrder(@RequestBody OrderDetails order) {
		service.addOrder(order);
	}	
	
	@DeleteMapping("/delete/{id}")
	public void deleteOrderById(@PathVariable Integer id) {
		service.deleteOrder(id);
	}
	
	@PutMapping("/update/{id}")
	public void updateOrder(@PathVariable Integer id,@RequestBody OrderDetails order){
		service.updateOrder(id, order);
	}
}
