package com.workmanagepro.workmanageproapi.repository;

import com.workmanagepro.workmanageproapi.domain.entities.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
