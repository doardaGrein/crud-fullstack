package com.workmanagepro.workmanageproapi.service;

import com.workmanagepro.workmanageproapi.domain.entities.FinanceEntity;
import com.workmanagepro.workmanageproapi.repository.FinanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FinanceService {

    private final FinanceRepository financeRepository;

    @Autowired
    public FinanceService(FinanceRepository financeRepository) {
        this.financeRepository = financeRepository;
    }

    public List<FinanceEntity> listFinances() {
        return financeRepository.findAll();
    }
}
