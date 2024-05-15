import React from "react";
import styled from "styled-components";
import SupportInfo from "./SupportInfo";
import SupportImage from "./SupportImage";
import FlexRow from "../FlexRow/FlexRow";

const StrongParagraph = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: #9b9898;
`;

const SupportContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  ${(props) => props.theme.breakpoints.small`
    margin-top: 20px;
  `}
`;

export const SupportContact = ({ supportContact }) => {
  return (
    <SupportContactWrapper>
      <StrongParagraph>Your feefo support contact</StrongParagraph>

      <FlexRow>
        <SupportImage name={supportContact.name} />
        <SupportInfo profile={supportContact} />
      </FlexRow>
    </SupportContactWrapper>
  );
};

export default SupportContact;
