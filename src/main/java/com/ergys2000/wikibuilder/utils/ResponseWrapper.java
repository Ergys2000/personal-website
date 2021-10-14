package com.ergys2000.wikibuilder.utils;

public class ResponseWrapper<T> {
    private T result;
    private String status;
    private String message;
    public ResponseWrapper(String status, T t, String message) {
        this.result = t;
        this.status = status;
        this.message = message;
    }

    public T getResult() {
        return result;
    }

    public void setResult(T result) {
        this.result = result;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
