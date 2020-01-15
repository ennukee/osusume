import React from "react";
import styled from "styled-components";

interface StepProps {
  number: number;
  title: string;
  children: string;
}
export const LandingStep: React.FC<StepProps> = ({
  number,
  title,
  children
}) => {
  return (
    <Container>
      <StepBackLine />
      <StepNumber>{number}</StepNumber>
      <StepTitle>{title}</StepTitle>
      <StepDescription>{children}</StepDescription>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0px;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const StepBackLine = styled.div`
  position: absolute;
  height: 1px;
  width: 100%;
  top: 25px;
  background-color: black;
`;

const StepNumber = styled.div`
  padding: 0 10px;
  background-color: white;
  font-weight: 900;
  font-size: 40px;
  z-index: 2;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

const StepTitle = styled.div`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 24px;
  margin-top: -5px;
`;

const StepDescription = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
`;
