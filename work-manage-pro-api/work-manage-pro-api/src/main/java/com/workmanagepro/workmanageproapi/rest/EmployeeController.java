package com.workmanagepro.workmanageproapi.rest;

import com.workmanagepro.workmanageproapi.domain.dto.EmployeeRequest;
import com.workmanagepro.workmanageproapi.domain.entities.EmployeeEntity;
import com.workmanagepro.workmanageproapi.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
@CrossOrigin(
        origins = "*",
        allowedHeaders = "*"
)
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    // list
    @GetMapping
    public List<EmployeeEntity> getAll() {
        return employeeService.listEmployees();
    }

    // form
    @PostMapping
    public ResponseEntity<String> registerEmployee(@RequestBody EmployeeRequest request) {
        employeeService.createUser(request);
        return new ResponseEntity<>("Funcionário salvo com sucesso.", HttpStatus.CREATED);
    }

    // details
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeEntity> getEmployeeDetails(@PathVariable Long id) {
        EmployeeEntity employee = employeeService.detailsEmployee(id);
        return ResponseEntity.ok(employee);
    }

    // edit
    @PutMapping("/{id}")
    public ResponseEntity<EmployeeEntity> updateEmployee(@PathVariable Long id, @RequestBody EmployeeEntity employee) {
        EmployeeEntity updated = employeeService.updateEmployee(id, employee);
        return ResponseEntity.ok(updated);
    }

    // activate
    @PatchMapping("/{id}/activate")
    public ResponseEntity<EmployeeEntity> activateEmployee(@PathVariable Long id) {
        EmployeeEntity activatedEmployee = employeeService.activateEmployee(id);
        return ResponseEntity.ok(activatedEmployee);
    }

    // deactivate
    @PatchMapping("/{id}/deactivate")
    public ResponseEntity<EmployeeEntity> deactivateEmployee(@PathVariable Long id) {
        EmployeeEntity deactivatedEmployee = employeeService.deactivateEmployee(id);
        return ResponseEntity.ok(deactivatedEmployee);
    }

}