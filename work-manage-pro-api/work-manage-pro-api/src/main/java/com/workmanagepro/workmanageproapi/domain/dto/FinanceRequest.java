package com.workmanagepro.workmanageproapi.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FinanceRequest {
    private LocalDateTime transactionDate;
    private String description;
    private BigDecimal amount;
    private BigDecimal assets;
    private BigDecimal liabilities;
    private BigDecimal revenues;
    private BigDecimal expenses;
}
