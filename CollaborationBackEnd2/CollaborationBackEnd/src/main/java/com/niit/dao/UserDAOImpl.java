package com.niit.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.niit.model.Job;
import com.niit.model.User;
@EnableTransactionManagement
@Repository("userDAO")
public class UserDAOImpl {
	@Autowired
	private SessionFactory sessionFactory;

	public UserDAOImpl(SessionFactory sessionFactory)
	{
	this.sessionFactory = sessionFactory;

	}
	@Transactional
	public void saveOrUpdate(User user) {
		sessionFactory.getCurrentSession().saveOrUpdate(user);
	}

	@Transactional
	public void delete(String id) {
		User UserToDelete = new User();
		UserToDelete.setUser_id(id);
		sessionFactory.getCurrentSession().delete(UserToDelete);
	}

	@Transactional
	public User get(String id) {
		String hql = "from User where id=" + "'"+ id +"'";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		
		@SuppressWarnings("unchecked")
		List<User> listUser = (List<User>) query.list();
		
		if (listUser!= null && !listUser.isEmpty()) {
			return listUser.get(0);
		}
		
		return null;
	}
	
}
