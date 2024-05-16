package com.cloneinsta.basic.instagram.clone.exceptions;

import java.time.LocalDateTime;

public class ErrorDetails {

    private String message;
    private String details;
    private LocalDateTime timestamp;

    public ErrorDetails(){

    }

    public ErrorDetails(String message, String details, LocalDateTime timestamp) {
        this.message = message;
        this.details = details;
        this.timestamp = timestamp;
    }

//    public ErrorDetails(String defaultMessage, String details2, LocalDateTime now){    }
}

