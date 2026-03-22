package com.home.carshop.mapper;

import com.home.carshop.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {

//    회원가입 등록 쿼리 실행 메서드
    void join(MemberDTO memberDTO);
}
