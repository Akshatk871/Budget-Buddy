package com.ADP.BudgetBuddy.controller;

import com.ADP.BudgetBuddy.model.Account;
import com.ADP.BudgetBuddy.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping
    public List<Account> getAllAccounts() {
        return accountService.findAllAccounts();
    }

    @GetMapping("/user/{userId}")
    public List<Account> getAccountsByUserId(@PathVariable String userId) {
        return accountService.findAccountsByUserId(userId);
    }

    @PostMapping
    public Account createAccount(@RequestBody Account account) {
        return accountService.saveAccount(account);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccount(@PathVariable String id) {
        return accountService.findAccountsByUserId(id)
                .isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok().<Void>build();
    }
}