package com.ADP.BudgetBuddy.repository;

import com.ADP.BudgetBuddy.model.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface TransactionRepository extends MongoRepository<Transaction, String> {
    // Custom database queries can be defined here
    List<Transaction> findByAccountId(String accountId);
    List<Transaction> findByType(String type);
}