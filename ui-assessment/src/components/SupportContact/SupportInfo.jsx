import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import FlexRow from "../FlexRow/FlexRow";
import FlexColumn from "../FlexColumn/FlexColumn";

const SupportInfoName = styled.h3`
  font-weight: bold;
  font-size: 14px;
  margin: 2px 0;
  color: #4c494a;
`;

const StyledEmailIcon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

const SupportInfoWrapper = styled(FlexColumn)`
  align-items: baseline;
`;

const StyledParagraph = styled.p`
  font-size: 14px;
  color: #606060;
  margin-right: 18px;
`;

const StyledFlexRow = styled(FlexRow)`
  align-items: center;
  justify-content: center;
`;

const SupportInfo = ({ profile }) => {
  return (
    <SupportInfoWrapper>
      <SupportInfoName>{profile.name}</SupportInfoName>

      <StyledFlexRow>
        <StyledParagraph>
          <StyledEmailIcon icon={faEnvelope} color="#606060" /> {profile.email}
        </StyledParagraph>
        <StyledParagraph>020 3362 4208</StyledParagraph>
      </StyledFlexRow>
    </SupportInfoWrapper>
  );
};

export default SupportInfo;
