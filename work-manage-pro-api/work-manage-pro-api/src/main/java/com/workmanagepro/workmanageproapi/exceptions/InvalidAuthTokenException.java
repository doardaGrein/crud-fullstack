package com.workmanagepro.workmanageproapi.exceptions;

public class InvalidAuthTokenException extends RuntimeException {

    public InvalidAuthTokenException(String message) {
        super(message);
    }
}
