package com.workmanagepro.workmanageproapi.service;

import com.workmanagepro.workmanageproapi.domain.entities.ProductEntity;
import com.workmanagepro.workmanageproapi.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// produtos
@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductEntity> listProducts() {
        return productRepository.findAll();
    }

}
