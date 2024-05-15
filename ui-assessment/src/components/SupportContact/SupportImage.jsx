import React from "react";
import styled from "styled-components";

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: #f9cf03;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  h2 {
    font-size: 14px;
  }
`;

const SupportImage = ({ name }) => {
  const nameFirstLetter = name.charAt(0);

  return (
    <ProfileImage>
      <h2>{nameFirstLetter}</h2>
    </ProfileImage>
  );
};

export default SupportImage;
