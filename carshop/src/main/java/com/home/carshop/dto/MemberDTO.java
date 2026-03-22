package com.home.carshop.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class MemberDTO {
    private int memberNo;
    private String email;
    private String countryCode;
    private String phone;
    private String password;
    private String lastName;
    private String firstName;
    private LocalDate birthDate;
    private String gender;
    private String status;
    private String role;
    private LocalDateTime withdrawnAt;
    private LocalDateTime createdAt;
}
