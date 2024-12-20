package com.ADP.BudgetBuddy.controller;

import com.ADP.BudgetBuddy.model.Transaction;
import com.ADP.BudgetBuddy.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public List<Transaction> getAllTransactions() {
        return transactionService.findAllTransactions();
    }

    @GetMapping("/account/{accountId}")
    public List<Transaction> getTransactionsByAccountId(@PathVariable String accountId) {
        return transactionService.findTransactionsByAccountId(accountId);
    }

    @PostMapping
    public Transaction createTransaction(@RequestBody Transaction transaction) {
        return transactionService.saveTransaction(transaction);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable String id) {
        return transactionService.findTransactionsByAccountId(id)
                .isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok().<Void>build();
    }
}