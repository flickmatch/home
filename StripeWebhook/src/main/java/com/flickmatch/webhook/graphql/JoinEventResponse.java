package com.flickmatch.webhook.graphql;

public class JoinEventResponse {
    private boolean isSuccessful;
    private String errorMessage;

    // Constructors

    public JoinEventResponse(boolean isSuccessful, String errorMessage) {
        this.isSuccessful = isSuccessful;
        this.errorMessage = errorMessage;
    }

    // Getters and Setters
    public boolean isSuccessful() {
        return isSuccessful;
    }

    public void setSuccessful(boolean successful) {
        isSuccessful = successful;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
