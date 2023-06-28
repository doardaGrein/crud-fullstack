package com.workmanagepro.workmanageproapi.rest;

import com.workmanagepro.workmanageproapi.domain.entities.SupplierEntity;
import com.workmanagepro.workmanageproapi.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/suppliers")
@CrossOrigin(
        origins = "*",
        allowedHeaders = "*"
)
public class SupplierController {

    private final SupplierService supplierService;

    @Autowired
    public SupplierController(SupplierService supplierService) {
        this.supplierService = supplierService;
    }

    @GetMapping("/list")
    public List<SupplierEntity> getAll() {
        return supplierService.listSupplier();
    }

    // form

    // details

    // edit

    // delete

}
