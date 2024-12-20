package com.ADP.BudgetBuddy.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class Transaction {
    @Id
    private String transactionId;
    private double amount;
    private Date date;
    private String type; // "income" or "expense"
    private String category;
    private String accountId;

    // Constructors, getters, and setters
    public Transaction() {
    }

    public Transaction(double amount, Date date, String type, String category, String accountId) {
        this.amount = amount;
        this.date = date;
        this.type = type;
        this.category = category;
        this.accountId = accountId;
    }

    // Getters and setters
    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

}