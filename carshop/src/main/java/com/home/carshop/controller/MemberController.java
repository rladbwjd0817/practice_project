package com.home.carshop.controller;

import com.home.carshop.dto.MemberDTO;
import com.home.carshop.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/members")
@Slf4j
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

//    회원가입 등록 api
//    url : (POST) localhost:8080/members
    @PostMapping("")
    public ResponseEntity<?> join(@RequestBody MemberDTO memberDTO){
        try {
            log.info("회원가입 등록을 실행합니다.");
            memberService.join(memberDTO);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch (Exception e){
            log.error("회원가입 등록 중 오류 발생", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


}
