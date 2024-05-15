import React from "react";
import styled from "styled-components";

const RateOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  margin: 20px 0;
  align-items: baseline;
`;

const PercentText = styled.span`
  text-transform: uppercase;
  color: #11a046;
  font-weight: bold;
  font-size: 32px;
`;

const AboutText = styled(PercentText)`
  color: #898888;
  font-size: 16px;

  ${(props) => props.theme.breakpoints.small`
    font-size: 14px;
  `}
`;

const RateOverview = ({ title, percent }) => {
  return (
    <RateOverviewWrapper>
      <PercentText>{percent}%</PercentText>
      <AboutText>{title}</AboutText>
    </RateOverviewWrapper>
  );
};

export default RateOverview;
