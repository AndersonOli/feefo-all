import React from "react";
import styled from "styled-components";
import FlexRow from "../FlexRow/FlexRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faUpload } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../Tooltip/Tooltip";

const SalesOverview = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  padding: 30px;
`;

const StyledUploadIcon = styled(FontAwesomeIcon)`
  color: #3eb1eb;
  margin-right: 8px;
`;

const InformativeRow = styled(FlexRow)`
  justify-content: space-between;
`;

const StatusParagraph = styled.p`
  color: #878787;
  margin-top: 18px;
  align-self: flex-start;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const UploadResume = ({ date, successfulUploads, linesSaved }) => {
  return (
    <SalesOverview>
      <InformativeRow>
        <FlexRow>
          <StyledUploadIcon icon={faUpload} />

          <h4>Sales</h4>
        </FlexRow>

        <Tooltip text={`The last time uploaded was on ${date}`}>
          <FontAwesomeIcon id="info-circle" icon={faInfoCircle} color="#bfbbbb" />
        </Tooltip>
      </InformativeRow>

      <StatusParagraph id="status-paragraph">
        You had <BoldText>{successfulUploads} uploads</BoldText> and{" "}
        <BoldText>{linesSaved}</BoldText> lines added.
      </StatusParagraph>
    </SalesOverview>
  );
};

export default UploadResume;
