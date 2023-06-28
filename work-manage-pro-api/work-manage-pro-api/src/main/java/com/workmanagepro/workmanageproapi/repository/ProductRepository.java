package com.workmanagepro.workmanageproapi.repository;

import com.workmanagepro.workmanageproapi.domain.entities.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
}
