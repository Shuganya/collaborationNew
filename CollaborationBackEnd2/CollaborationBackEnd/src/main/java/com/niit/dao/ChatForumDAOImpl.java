package com.niit.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;


import com.niit.model.ChatForum;

@EnableTransactionManagement
@Repository("chatforumDAO")
public class ChatForumDAOImpl {
	@Autowired
	private SessionFactory sessionFactory;

	public ChatForumDAOImpl(SessionFactory sessionFactory)
	{
	this.sessionFactory = sessionFactory;

	}
	@Transactional
	public void saveOrUpdate(ChatForum chatforum) {
		sessionFactory.getCurrentSession().saveOrUpdate(chatforum);
	}

	@Transactional
	public void delete(String id) {
		ChatForum ChatForumToDelete = new ChatForum();
		ChatForumToDelete.setId(id);
		sessionFactory.getCurrentSession().delete(ChatForumToDelete);
	}

	@Transactional
	public ChatForum get(String id) {
		String hql = "from ChatForum where id=" + "'"+ id +"'";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		
		@SuppressWarnings("unchecked")
		List<ChatForum> listChatForum = (List<ChatForum>) query.list();
		
		if (listChatForum != null && !listChatForum.isEmpty()) {
			return listChatForum.get(0);
		}
		
		return null;
	}
	

}
