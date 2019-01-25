package com.ness.hrms.daoImpl;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.ness.hrms.dao.LoginDao;
import com.ness.hrms.entity.User;

@Repository
public class LoginDaoImpl implements LoginDao {

	@Autowired
	private HibernateTemplate hibernateTemplate;

	

	@Override
	public String checkUser(String string) {
		
		String dataOne = string.toString();
		JSONObject json = (JSONObject) JSONSerializer.toJSON(dataOne);

		String userName = (String) json.get("userName");
		String password = (String) json.get("password");
		List<User> lstUsers = new ArrayList<User>();
		String returnMessage;

		try {
			lstUsers = hibernateTemplate.loadAll(User.class);

			returnMessage = "{'success':false,'status':'login failed'}";
			for (int i = 0; i < lstUsers.size(); i++) {
				String name = lstUsers.get(i).getUserName();
				String pass = lstUsers.get(i).getPassword();
				if (name.equalsIgnoreCase(userName) && pass.equals(password)) {
					System.out.println("successful login");
					returnMessage = "{'success':true,'status':'login succes'}";

				}
			}

		} catch (Exception e) {
			returnMessage = "{'status':'Error'}";
		}
		System.out.println(returnMessage);
		return returnMessage;
	}
}
