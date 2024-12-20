package com.ADP.BudgetBuddy.repository;

import com.ADP.BudgetBuddy.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    // You can define custom queries here if needed, for example:
    User findByUsername(String username);
}
