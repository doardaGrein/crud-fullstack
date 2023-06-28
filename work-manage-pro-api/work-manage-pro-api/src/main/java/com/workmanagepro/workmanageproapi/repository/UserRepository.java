package com.workmanagepro.workmanageproapi.repository;

import com.workmanagepro.workmanageproapi.domain.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByEmail(String email);

}
