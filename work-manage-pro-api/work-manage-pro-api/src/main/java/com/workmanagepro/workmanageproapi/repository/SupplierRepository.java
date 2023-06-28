package com.workmanagepro.workmanageproapi.repository;

import com.workmanagepro.workmanageproapi.domain.entities.SupplierEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<SupplierEntity, Long> {
}
