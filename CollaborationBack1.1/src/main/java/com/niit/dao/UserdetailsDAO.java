package com.niit.dao;

import java.util.List;

import org.springframework.stereotype.Repository;


import com.niit.model.Userdetails;



@Repository
public interface UserdetailsDAO {
	
	public boolean save(Userdetails userdetails);
	
	public boolean update(Userdetails userdetails);
		
		public boolean delete(String id);
		
		
		public List<Userdetails> list();
				
		public Userdetails authenticate(String username, String password);
		
		public Userdetails get(String username);
		

	
			

}
