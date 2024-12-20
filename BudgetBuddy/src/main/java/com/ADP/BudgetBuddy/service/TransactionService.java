package com.ADP.BudgetBuddy.service;

import com.ADP.BudgetBuddy.model.Transaction;
import com.ADP.BudgetBuddy.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> findAllTransactions() {
        return transactionRepository.findAll();
    }

    public List<Transaction> findTransactionsByAccountId(String accountId) {
        return transactionRepository.findByAccountId(accountId);
    }

    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    public void deleteTransaction(String id) {
        transactionRepository.deleteById(id);
    }
}