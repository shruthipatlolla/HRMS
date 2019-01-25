package com.ness.hrms.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Set;

import com.ness.hrms.entity.User;

public interface EmployeeDao {

	public Set<HashMap<String, String>> employeeList();

	public List<User> empTable();

}
