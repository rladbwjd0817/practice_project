package com.house.practiceitem.member.mapper;

import com.house.practiceitem.member.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {

// 로그인 쿼리 실행 메서드
    MemberDTO checkLogin(MemberDTO memberDTO);
}
