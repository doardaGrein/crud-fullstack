package com.workmanagepro.workmanageproapi.rest;

import com.workmanagepro.workmanageproapi.domain.dto.ChangePasswordRequest;
import com.workmanagepro.workmanageproapi.domain.dto.UserRequest;
import com.workmanagepro.workmanageproapi.domain.model.UserModel;
import com.workmanagepro.workmanageproapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(
        origins = "*",
        allowedHeaders = "*"
)
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserRequest> createUser(@RequestBody UserModel userModel) {
        UserRequest createUser = userService.createUser(userModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(createUser);
    }

    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestBody ChangePasswordRequest changePasswordRequest) {
        String email = changePasswordRequest.getEmail();
        String oldPassword = changePasswordRequest.getOldPassword();
        String newPassword = changePasswordRequest.getNewPassword();
        boolean passwordChanged = userService.changePassword(email, oldPassword, newPassword);
        if (passwordChanged) {
            return ResponseEntity.ok("Password changed successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid email or old password.");
        }
    }

}
