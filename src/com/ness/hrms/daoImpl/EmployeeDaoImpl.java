package com.ness.hrms.daoImpl;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.ness.hrms.dao.EmployeeDao;
import com.ness.hrms.entity.User;

@Repository
public class EmployeeDaoImpl implements EmployeeDao {

	
	@Autowired
	private HibernateTemplate hibernateTemplate;
	
	@Override
	public Set<HashMap<String,String>> employeeList() {
		Set<HashMap<String, String>> list = new HashSet<HashMap<String, String>>();
		System.out.println("Hello.........");
		
		try{
		List<com.ness.hrms.entity.User> users = hibernateTemplate.loadAll(com.ness.hrms.entity.User.class);
		for (int i = 0; i < users.size(); i++) {
			HashMap<String, String> map = new HashMap<String, String>();
			String userName = users.get(i).getUserName();
			String userId = users.get(i).getUserId();
			/*Iterator<HashMap<String, String>> itr = list.iterator();
			while(itr.hasNext()){
				HashMap<String, String> temp = itr.next();
			}*/
			map.put("text", userName);
			map.put("value", userId );
			list.add(map);

		}
		}
		catch (Exception e) {
			System.out.println("Exception :" + e);
		}
				//hibernateTemplate.find("select  username from USER");
		//hibernateTemplate.find("u.username from hrms.user u");
		return list;
	}

	@Override
	public List<User> empTable() {
		List<User> list = hibernateTemplate.loadAll(User.class);
		return list;
	}

}
