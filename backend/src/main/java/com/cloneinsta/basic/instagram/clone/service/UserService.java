package com.cloneinsta.basic.instagram.clone.service;

import com.cloneinsta.basic.instagram.clone.exceptions.UserException;
import com.cloneinsta.basic.instagram.clone.modal.User;
import jdk.jshell.spi.ExecutionControl;

import java.util.List;

public interface UserService {

    public User registerUser(User user) throws ExecutionControl.UserException, UserException;

    public User findUserById(Integer userId) throws ExecutionControl.UserException, UserException;

    public User findUserProfile(String token) throws ExecutionControl.UserException;

    public User findUserByUsername(String username) throws ExecutionControl.UserException;

    public String followUser(Integer regUserId, Integer followUserId) throws ExecutionControl.UserException;

    public String unFollowUser(Integer regUserId, Integer followUserId) throws ExecutionControl.UserException;

    public List<User> findUserById(List<Integer> userId) throws ExecutionControl.UserException, UserException;

    public List<User> searchUser(String query) throws ExecutionControl.UserException, UserException;

    public User updateUserDetails(User updatedUser, User existingUser) throws ExecutionControl.UserException;


}
