package com.ADP.BudgetBuddy.service;

import com.ADP.BudgetBuddy.model.Account;
import com.ADP.BudgetBuddy.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public List<Account> findAllAccounts() {
        return accountRepository.findAll();
    }

    public List<Account> findAccountsByUserId(String userId) {
        return accountRepository.findByUserId(userId);
    }

    public Account saveAccount(Account account) {
        return accountRepository.save(account);
    }

    public void deleteAccount(String id) {
        accountRepository.deleteById(id);
    }
}