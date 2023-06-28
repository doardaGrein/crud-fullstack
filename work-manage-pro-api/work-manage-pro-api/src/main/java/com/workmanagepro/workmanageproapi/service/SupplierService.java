package com.workmanagepro.workmanageproapi.service;

import com.workmanagepro.workmanageproapi.domain.entities.SupplierEntity;
import com.workmanagepro.workmanageproapi.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService {

    private final SupplierRepository supplierRepository;

    @Autowired
    public SupplierService(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    public List<SupplierEntity> listSupplier() {
        return supplierRepository.findAll();
    }

}
