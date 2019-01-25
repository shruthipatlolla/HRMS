package com.ness.hrms.daoImpl;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.google.gson.Gson;
import com.ness.hrms.dao.RegisterDao;
import com.ness.hrms.entity.User;

@Repository
public class RegisterDaoImpl implements RegisterDao {
	
	@Autowired
	private HibernateTemplate hibernateTemplate;

	/*@Autowired
	private SessionFactory sessionFactory;*/
	
	@Override
	public String createUser(String string) {
		String myResponse;
		String dataOne = string.toString();

		JSONObject json = (JSONObject) JSONSerializer.toJSON(dataOne);
		String userName = (String) json.get("userName");
		System.out.println("username:" + userName);
		try {
			Gson gson = new Gson();
			User user = gson.fromJson(dataOne, User.class);  
			
			String sos = user.getUserId();
			System.out.println("values are "+sos);
			
			hibernateTemplate.saveOrUpdate(user);
			myResponse = "{ 'success': true, 'msg': 'User Created' }";
		} catch (Exception e) {
			System.out.println(e);
			myResponse = "{ 'success': false, 'msg': 'User creation failed,try again' }";	
		}
		
			
		return myResponse;
	}

	
	public  User viewUser(String data) {
		List<User> lstUsers = new ArrayList<User>();
		User user = null ;
		try {
			System.out.println("try dao");
			System.out.println("data..."+data);
			String hql = "from hrms.user where userName="+"'"+data+"'";
			System.out.println("hql...12"+hibernateTemplate);
			user =  hibernateTemplate.get(User.class, data);
			
			//user = users.get(1);
			//System.out.println("size"+user.getUserName());
			/*
			lstUsers = hibernateTemplate.loadAll(User.class);
			System.out.println(lstUsers.size());
			for (int i = 0; i < lstUsers.size(); i++) {

				String userName = lstUsers.get(i).getUserName();
				if (userName.equalsIgnoreCase(data)) {
					
					 user = lstUsers.get(i);
				}
				else{
					System.out.println("else");
				}
			}

		*/} catch (Exception e) {
			System.out.println("Exception :" + e);
		}
		return user;
		/*
		String myResponse;
		String dataOne = data.toString();
		List<User> lstUsers = new ArrayList<User>();
		String json = null;
		try {
			
			lstUsers = hibernateTemplate.loadAll(User.class);

			for (int i = 0; i < lstUsers.size(); i++) {
				System.out.println(dataOne);
				String name = lstUsers.get(i).getUserName();
				System.out.println("name "+name);
				if (name.equalsIgnoreCase(dataOne) ) {
					User user= lstUsers.get(i);
					System.out.println(user);
					Gson gson = new Gson();
					 
					
					 json = gson.toJson(user);
					 System.out.println(json);
				}
			}
			
			
			//
			//"select user from User user " +"where user.userName="+data
			Object record = hibernateTemplate.find("FROM User u WHERE u.userName= '" + data + "'");

			//Object record = hibernateTemplate.find("SELECT user FROM User WHERE userName=data;");
			System.out.println("record is "+record);
			Gson gson = new Gson();
			 
			
			String json = gson.toJson(record);
			myResponse = "{ 'success': true, 'msg': 'User Created','result':"+json+"}";
		
			myResponse = "{ 'success': true, 'msg': 'User Created','result':"+json+"}";	
		} catch (Exception e) {
			System.out.println(e);
			myResponse = "{ 'success': false, 'msg': 'unable to display the data' }";	
		}
		
		return myResponse;
	*/}
	
	/*public int getUniqueUserId(){
	    Random randomGenerator = new Random();
	    int randomInt = randomGenerator.nextInt(1000);
	    //return Integer.toString(randomInt);
	    return randomInt;
	}*/
	
	
	/*public static void main(String args[]){
		
		RegisterDaoImpl iml = new RegisterDaoImpl();
		
		User user = iml.viewUser("shruthi");
		
		
	}*/

}
