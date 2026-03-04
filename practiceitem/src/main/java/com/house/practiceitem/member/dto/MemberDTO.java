package com.house.practiceitem.member.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class MemberDTO {
    private int memNo;
    private String memId;
    private String memPw;
    private String memName;
    private int memAge;
    private String memAddr;
    private String addrDetail;
    private String memTel;
    private String isUsing;
    private String memRole;
    private LocalDateTime joinDate;
}
