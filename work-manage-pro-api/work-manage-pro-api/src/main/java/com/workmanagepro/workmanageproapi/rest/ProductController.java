package com.workmanagepro.workmanageproapi.rest;

import com.workmanagepro.workmanageproapi.domain.entities.ProductEntity;
import com.workmanagepro.workmanageproapi.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/inventories/products")
@CrossOrigin(
        origins = "*",
        allowedHeaders = "*"
)
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/list")
    public List<ProductEntity> getProducts() {
        return productService.listProducts();
    }

    // form

    // details

    // edit

    // delete

}
