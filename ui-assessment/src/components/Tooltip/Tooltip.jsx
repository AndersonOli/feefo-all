import React, { useState } from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
  width: 180px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  right: -50%;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.3s;
  font-size: 10px;
`;

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id="tooltip"
      data-testid="tooltip-container"
    >
      {children}
      <TooltipText visible={visible}>{text}</TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
