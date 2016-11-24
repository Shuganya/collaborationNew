package com.niit.dao;

import java.util.List;

import org.springframework.stereotype.Repository;


import com.niit.model.Job;

@Repository
public interface JobDAO {
public boolean saveOrUpdate(Job job);

	
	public boolean delete(Job job);
	
	public Job get(String id);
	
	public List<Job> list();

}
