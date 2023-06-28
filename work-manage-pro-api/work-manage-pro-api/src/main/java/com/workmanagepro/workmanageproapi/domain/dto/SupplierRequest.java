package com.workmanagepro.workmanageproapi.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SupplierRequest {
    private String name;
    private String address;
    private String contactName;
    private String email;
    private String phone;
}
