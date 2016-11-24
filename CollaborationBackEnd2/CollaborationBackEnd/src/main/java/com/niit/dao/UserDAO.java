package com.niit.dao;

import java.util.List;

import org.springframework.stereotype.Repository;


import com.niit.model.User;

@Repository
public interface UserDAO {
public boolean saveOrUpdate(User user);

	
	public boolean delete(User user);
	
	public User get(String id);
	
	public List<User> list();

}
