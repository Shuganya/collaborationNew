package com.niit.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.niit.model.ChatForum;

@Repository
public interface ChatForumDAO {
public boolean saveOrUpdate(ChatForum chatforum);

	
	public boolean delete(ChatForum chatforum);
	
	public ChatForum get(String id);
	
	public List<ChatForum> list();

}
