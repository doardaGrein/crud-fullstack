package com.workmanagepro.workmanageproapi.domain.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "finances")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FinanceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime transactionDate;
    private String description;
    private BigDecimal amount;
    private BigDecimal assets;
    private BigDecimal liabilities;
    private BigDecimal revenues;
    private BigDecimal expenses;
}
