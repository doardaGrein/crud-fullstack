package com.workmanagepro.workmanageproapi.domain.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "employees")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, length = 250)
    private String name;

    @Email(message = "Insira um email válido")
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "department")
    private String department;

//    @Column(name = "hire_date", updatable = false, columnDefinition = "datetime")
//    private LocalDate hireDate;

    @Column(name = "salary")
    private BigDecimal salary;

    @Column(name = "age", length = 3)
    private Integer age;

    @Column(name = "position")
    private String position;

    @Column(name = "active")
    private Boolean active;

//    @CreationTimestamp
//    @Column(nullable = false, columnDefinition = "datetime")
//    private OffsetDateTime dataCadastro;
//
//    @UpdateTimestamp
//    @Column(nullable = false, columnDefinition = "datetime")
//    private OffsetDateTime dataAtualizacao;

}
