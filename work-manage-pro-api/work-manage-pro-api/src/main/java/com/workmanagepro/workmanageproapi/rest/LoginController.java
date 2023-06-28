package com.workmanagepro.workmanageproapi.rest;

import com.workmanagepro.workmanageproapi.domain.dto.LoginRequest;
import com.workmanagepro.workmanageproapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin(
        origins = "*",
        allowedHeaders = "*"
)
public class LoginController {

    private final UserService userService;

    @Autowired
    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<Boolean> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();
        // Verifique no banco de dados se o email e senha estão cadastrados
        boolean isValidLogin = userService.verifyLogin(email, password);
        return ResponseEntity.ok(isValidLogin);
    }

}
