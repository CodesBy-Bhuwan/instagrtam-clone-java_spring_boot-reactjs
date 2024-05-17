package com.cloneinsta.basic.instagram.clone.service;

import com.cloneinsta.basic.instagram.clone.Repo.UserRepo;
import com.cloneinsta.basic.instagram.clone.dto.UserDto;
import com.cloneinsta.basic.instagram.clone.exceptions.UserException;
import com.cloneinsta.basic.instagram.clone.modal.User;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public class UserServiceImplementation implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public User registerUser(User user) throws UserException {

        Optional<User> isEmailExist = userRepo.findByEmail(user.getEmail());
        if (isEmailExist.isPresent()){
            throw new UserException("Email is Already Exist");
        }

        Optional<User> isUsernameExist = userRepo.findByUsername(user.getUsername());
        if (isUsernameExist.isPresent()){
            throw new UserException("Username is Already Taken. . .");
        }
        if (user.getEmail()==null || user.getPassword()==null || user.getUsername()==null || user.getName()==null){
            throw  new UserException("all fields are required");
        }

        User newUser = new User();

        newUser.setEmail(user.getEmail());
        newUser.setPassword(user.getPassword());
        newUser.setUsername(user.getUsername());
        newUser.setName(user.getName());

        return userRepo.save(newUser);
    }

    @Override
    public User findUserById(Integer userId) throws UserException {

        Optional<User> opt = userRepo.findById(userId);
        if (opt.isPresent()){
            return opt.get();
        }
        throw new UserException("User not exist with id: "+ userId);
    }

    @Override
    public User findUserProfile(String token) throws ExecutionControl.UserException {
        return null;
    }

    @Override
    public User findUserByUsername(String username) throws ExecutionControl.UserException {
        return null;
    }

    @Override
    public String followUser(Integer regUserId, Integer followUserId) throws UserException {

        User reqUser=findUserById(regUserId);
        User followUser=findUserById(followUserId);

        UserDto follower = new UserDto();

        follower.setEmail(reqUser.getEmail());
        follower.setId(reqUser.getId());
        follower.setName(reqUser.getName());
        follower.setUserImage(reqUser.getUsername());
        follower.setUsername(reqUser.getUsername());

        UserDto following = new UserDto();
        following.setEmail(follower.getEmail());
        following.setUserImage(follower.getUserImage());
        following.setName(follower.getName());
        following.setUsername(following.getUsername());

        reqUser.getFollowing().add(following);
        followUser.getFollower().add(follower);

        userRepo.save(followUser);
        userRepo.save(reqUser);

        return "You are following" + followUser.getUsername();
    }

    @Override
    public String unFollowUser(Integer regUserId, Integer followUserId) throws ExecutionControl.UserException {

        User reqUser=findUserById(regUserId);
        User followUser=findUserById(followUserId);

        UserDto follower = new UserDto();

        follower.setEmail(reqUser.getEmail());
        follower.setId(reqUser.getId());
        follower.setName(reqUser.getName());
        follower.setUserImage(reqUser.getUsername());
        follower.setUsername(reqUser.getUsername());

        UserDto following = new UserDto();
        following.setEmail(follower.getEmail());
        following.setUserImage(follower.getUserImage());
        following.setName(follower.getName());
        following.setUsername(following.getUsername());

        reqUser.getFollowing().remove(following);
        followUser.getFollower().remove(follower);

        userRepo.save(followUser);
        userRepo.save(reqUser);

        return "You have unfollowed" + followUser.getUsername();
    }

    @Override
    public List<User> findUserById(List<Integer> userId) throws UserException {

        List<User> users=userRepo.findAllUsersByUserIds(userId);

        return users;
    }

    @Override
    public List<User> searchUser(String query) throws UserException {
        List<User> users=userRepo.findByQuery(query);
        if (users.size()==0){
            throw new UserException("User not found");
        }
        return users;
    }

    @Override
    public User updateUserDetails(User updatedUser, User existingUser) throws UserException {

        if (updatedUser.getEmail()!=null){
            existingUser.setEmail(updatedUser.getEmail());
        }


        return null;
    }
}
