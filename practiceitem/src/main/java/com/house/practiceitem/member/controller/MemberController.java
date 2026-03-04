package com.house.practiceitem.member.controller;

import com.house.practiceitem.member.dto.MemberDTO;
import com.house.practiceitem.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/mems")
@Slf4j
public class MemberController {
    private final MemberService memberService;

//    로그인 api
// url : (GET) localhost:8080/mems
    @GetMapping("")
    public ResponseEntity<?> checkLogin(@ModelAttribute MemberDTO memberDTO){
        try {
            log.info("로그인을 시도합니다.");
            MemberDTO loginResult = memberService.checkLogin(memberDTO);
            return ResponseEntity.status(HttpStatus.OK).body(loginResult);
        }catch (Exception e){
            log.error("로그인 중 오류 발생", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


}
