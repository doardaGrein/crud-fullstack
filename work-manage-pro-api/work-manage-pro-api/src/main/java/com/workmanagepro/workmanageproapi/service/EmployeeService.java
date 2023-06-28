package com.workmanagepro.workmanageproapi.service;

import com.workmanagepro.workmanageproapi.domain.dto.EmployeeRequest;
import com.workmanagepro.workmanageproapi.domain.entities.EmployeeEntity;
import com.workmanagepro.workmanageproapi.exceptions.EmployeeNotFoundException;
import com.workmanagepro.workmanageproapi.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<EmployeeEntity> listEmployees() {
        return employeeRepository.findAll();
    }

    public void createUser(EmployeeRequest employeeRequest) {
        var employee = new EmployeeEntity();
        employee.setName(employeeRequest.getName());
        employee.setEmail(employeeRequest.getEmail());
        employee.setDepartment(employeeRequest.getDepartment());
        employee.setSalary(employeeRequest.getSalary());
        employee.setAge(employeeRequest.getAge());
        employee.setPosition(employeeRequest.getPosition());
        employee.setActive(true);
        employeeRepository.save(employee);
    }

    public EmployeeEntity detailsEmployee(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    public EmployeeEntity updateEmployee(Long id, EmployeeEntity employee) {
        EmployeeEntity existingEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException(id));
        BeanUtils.copyProperties(employee, existingEmployee, "id");
        return employeeRepository.save(employee);
    }

    public EmployeeEntity activateEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException(id));

        employee.setActive(true);
        return employeeRepository.save(employee);
    }

    public EmployeeEntity deactivateEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException(id));

        employee.setActive(false);
        return employeeRepository.save(employee);
    }


}
