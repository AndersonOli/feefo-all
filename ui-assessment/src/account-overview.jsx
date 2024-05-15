import React from "react";
import SupportContact from "./components/SupportContact/SupportContact";
import RateOverview from "./components/RateOverview/RateOverview";
import FlexRow from "./components/FlexRow/FlexRow";
import UploadResume from "./components/UploadResume/UploadResume";
import styled from "styled-components";
import moment from "moment";
import "./account-overview.css";

const PageTitle = styled.h1`
  font-size: 24px;
  color: #3d3d3d;
`;

const OverviewWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 15px -1px rgba(0, 0, 0, 0.1);
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) => props.theme.breakpoints.small`
    flex-direction: column;
  `}
`;

const RateGrid = styled(FlexRow)`
  display: grid;
  grid-template-columns: 1.5fr 2px 1.5fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". . .";
`;

const VerticalDivider = styled.span`
  width: 1px;
  background-color: #eaeaea;
  height: 100%;
`;

const StyledAccountOverview = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  min-width: 388px;
`;

export const AccountOverview = ({ data }) => {
  const {
    uploads,
    successfulUploads,
    linesAttempted,
    linesSaved,
    lastUploadDate,
  } = data.salesOverview;

  const uploadRate = (successfulUploads / uploads) * 100;
  const lineSaveRate = (linesSaved / linesAttempted) * 100;
  const formattedDate = moment(lastUploadDate).format('YYYY-MM-DD [at] HH:mm');

  return (
    <StyledAccountOverview>
      <TitleWrapper>
        <PageTitle>Account Overview</PageTitle>

        <SupportContact supportContact={data.supportContact} />
      </TitleWrapper>

      <OverviewWrapper>
        <UploadResume {...data.salesOverview} date={formattedDate} />

        <RateGrid>
          <RateOverview title="upload success" percent={uploadRate} />
          <VerticalDivider />
          <RateOverview title="lines saved" percent={lineSaveRate} />
        </RateGrid>
      </OverviewWrapper>
    </StyledAccountOverview>
  );
};

export default AccountOverview;
