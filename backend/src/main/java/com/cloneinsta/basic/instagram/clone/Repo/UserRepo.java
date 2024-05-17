package com.cloneinsta.basic.instagram.clone.Repo;

import com.cloneinsta.basic.instagram.clone.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer> {



//    Has to be the same as decld in User
    public Optional<User> findByEmail(String email);

    public Optional<User> findByUsername(String username);

//    we have defined findUserById in UserService-class so we will use same function
    @Query("SELECT u  FROM User u Where u.id IN :users")
    public List<User> findAllUsersByUserIds(@Param("users") List<Integer> userIds);

    @Query("SELECT DISTINCT U FROM User u where u.username LIKE %:query% OR u.email LIKE %:query%")
    public List<User> findByQuery(@Param("query") String query);

}
