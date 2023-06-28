package com.workmanagepro.workmanageproapi.repository;

import com.workmanagepro.workmanageproapi.domain.entities.FinanceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FinanceRepository extends JpaRepository<FinanceEntity, Long> {
}
