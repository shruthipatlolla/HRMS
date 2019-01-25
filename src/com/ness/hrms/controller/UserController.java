package com.ness.hrms.controller;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.gson.Gson;
import com.ness.hrms.dao.EmployeeDao;
import com.ness.hrms.dao.LoginDao;
import com.ness.hrms.dao.RegisterDao;
import com.ness.hrms.entity.User;

@Controller
public class UserController {

	@Autowired
	private LoginDao loginDao;
	@Autowired
	private RegisterDao registerDao;
	@Autowired
	private EmployeeDao employeeDao;

	@RequestMapping(value = "/authUser", method = { RequestMethod.GET,
			RequestMethod.POST })
	public void authUser(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		String credentials = request.getParameter("credentials");
		System.out.println("values are :" + credentials);

		String returnMessage = loginDao.checkUser(credentials);

		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().println(returnMessage);
	}

	@RequestMapping(value = "/createUser", method = { RequestMethod.GET,
			RequestMethod.POST })
	public void createUser(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		System.out.println("creating");
		String data = request.getParameter("empData");
		System.out.println("values are :" + data);

		String myResponse = registerDao.createUser(data);

		PrintWriter out = response.getWriter();
		out.println(myResponse);

	}

	@RequestMapping(value = "/empData", method = { RequestMethod.GET,
			RequestMethod.POST })
	public void empData(HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		System.out.println("getting data");
		User user;
		String myResponse;
		String data = request.getParameter("data");
		String dataOne = data.toString();
		System.out.println("user name is :" + data);
		try {
			user = registerDao.viewUser(dataOne);
			System.out.println(user.getUserName());
			Gson gson = new Gson();

			String json = gson.toJson(user);
			myResponse = "{ 'success': true, 'msg': 'User Created','result':"
					+ json + "}";
		} catch (Exception e) {
			myResponse = "{ 'success': false, 'msg': 'unable to display the data' }";
		}

		PrintWriter out = response.getWriter();
		out.println(myResponse);

	}

	// employeeList

	@RequestMapping(value = "/employeeList", method = { RequestMethod.GET,
			RequestMethod.POST })
	public void employeeList(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		System.out.println("Employee List");

		Set<HashMap<String, String>> users = employeeDao.employeeList();
		JSONArray array = new JSONArray();
		array.addAll(users);

		response.setContentType("text/plain");

		response.setCharacterEncoding("UTF-8");

		response.getWriter().println(array);

		/*
		 * JSONArray array = new JSONArray(); array.addAll(users);
		 * System.out.println(array); PrintWriter out = response.getWriter();
		 * out.println(array);
		 */

	}

	// empTable
	@RequestMapping(value = "/empTable", method = { RequestMethod.GET,
			RequestMethod.POST })
	public void empTable(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		System.out.println("Employee List");

		List<User> list = employeeDao.empTable();
		JSONArray array = new JSONArray();
		array.addAll(list);

		response.setContentType("text/plain");

		response.setCharacterEncoding("UTF-8");

		response.getWriter().println(array);

		/*
		 * JSONArray array = new JSONArray(); array.addAll(users);
		 * System.out.println(array); PrintWriter out = response.getWriter();
		 * out.println(array);
		 */

	}
}
