package com.ADP.BudgetBuddy.repository;

import com.ADP.BudgetBuddy.model.Account;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AccountRepository extends MongoRepository<Account, String> {
    // Custom database queries can be defined here
    List<Account> findByUserId(String userId);
}
