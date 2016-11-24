package com.niit.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.niit.model.Blog;



@Repository
public interface BlogDAO {
	public boolean saveOrUpdate(Blog blog);

	
	public boolean delete(Blog blog);
	
	public Blog get(String id);
	
	public List<Blog> list();

}
