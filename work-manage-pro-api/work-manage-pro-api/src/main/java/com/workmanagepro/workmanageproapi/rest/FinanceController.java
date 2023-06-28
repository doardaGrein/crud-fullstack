package com.workmanagepro.workmanageproapi.rest;

import com.workmanagepro.workmanageproapi.domain.entities.FinanceEntity;
import com.workmanagepro.workmanageproapi.service.FinanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/finances")
@CrossOrigin(
        origins = "*",
        allowedHeaders = "*"
)
public class FinanceController {

    private final FinanceService financeService;

    @Autowired
    public FinanceController(FinanceService financeService) {
        this.financeService = financeService;
    }

    @GetMapping
    public List<FinanceEntity> getAll() {
        return financeService.listFinances();
    }

    // accounting

}
