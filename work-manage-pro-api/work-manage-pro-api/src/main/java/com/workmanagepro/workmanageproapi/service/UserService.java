package com.workmanagepro.workmanageproapi.service;

import com.workmanagepro.workmanageproapi.domain.dto.UserRequest;
import com.workmanagepro.workmanageproapi.domain.entities.UserEntity;
import com.workmanagepro.workmanageproapi.domain.model.UserModel;
import com.workmanagepro.workmanageproapi.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserRequest createUser(UserModel userModel) {
        // mapeamento dos dados model para entity
        var userEntity = new UserEntity();
        userEntity.setName(userModel.getName());
        userEntity.setEmail(userModel.getEmail());
        userEntity.setPassword(userModel.getPassword());
        userEntity.setCreationDate(LocalDateTime.now());
        // salvar no banco de dados
        UserEntity savedUser = userRepository.save(userEntity);
        // mapeamento dos dados entidade para resquest (dto)
        var request = new UserRequest();
        request.setId(savedUser.getId());
        request.setName(savedUser.getName());
        request.setEmail(savedUser.getEmail());
        request.setPassword(savedUser.getPassword());
        request.setCreationDate(savedUser.getCreationDate());
        return request;
    }

    // verificar se email e senha são válido - sem autenticação
    public boolean verifyLogin(String email, String password) {
        UserEntity user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }

    // alterar senha
    public boolean changePassword(String email, String oldPassword, String newPassword) {
        UserEntity user = userRepository.findByEmail(email);
        if (user != null && oldPassword.equals(user.getPassword())) {
            user.setPassword(newPassword);
            userRepository.save(user);
            return true; // Senha alterada com sucesso
        }
        return false; // Falha ao alterar a senha
    }

}