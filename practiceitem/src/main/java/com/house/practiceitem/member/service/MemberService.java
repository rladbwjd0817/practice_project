package com.house.practiceitem.member.service;


import com.house.practiceitem.member.dto.MemberDTO;
import com.house.practiceitem.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberMapper memberMapper;

//    로그인 기능 실행 메서드
    public MemberDTO checkLogin(MemberDTO memberDTO){
        return memberMapper.checkLogin(memberDTO);
    }
}
