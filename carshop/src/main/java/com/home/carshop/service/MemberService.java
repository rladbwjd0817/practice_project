package com.home.carshop.service;

import com.home.carshop.dto.MemberDTO;
import com.home.carshop.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberMapper memberMapper;

//    회원가입 등록 기능 실행 메서드
    public void join(MemberDTO memberDTO){
        memberMapper.join(memberDTO);
    }


}
