package com.ness.hrms.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	private String userName;
	private String userId;
	private String password;
	private String status;
	private String edc;
	private String bhr;
	private String level;
	private String doj;
	private String designation;
	private String directManager;
	private String indirectManager;
	
	
	@Column(name = "userName")
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	@Id
	@Column(name = "userId")
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	@Column(name = "password")
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Column(name = "status")
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	@Column(name = "edc")
	public String getEdc() {
		return edc;
	}
	public void setEdc(String edc) {
		this.edc = edc;
	}
	
	@Column(name = "bhr")
	public String getBhr() {
		return bhr;
	}
	public void setBhr(String bhr) {
		this.bhr = bhr;
	}
	
	@Column(name = "level")
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	
	@Column(name = "doj")
	public String getDoj() {
		return doj;
	}
	public void setDoj(String doj) {
		this.doj = doj;
	}
	
	@Column(name = "designation")
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	
	@Column(name = "directManager")
	public String getDirectManager() {
		return directManager;
	}
	public void setDirectManager(String directManager) {
		this.directManager = directManager;
	}
	
	@Column(name = "indirectManager")
	public String getIndirectManager() {
		return indirectManager;
	}
	public void setIndirectManager(String indirectManager) {
		this.indirectManager = indirectManager;
	}
}
	
