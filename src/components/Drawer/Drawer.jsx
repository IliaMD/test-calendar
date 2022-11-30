import React from "react";
import styled from "styled-components";

import calendar from "../../assets/img/calendar.png";
import exercises from "../../assets/img/exercises.png";
import materials from "../../assets/img/materials.png";
import personal from "../../assets/img/personal.png";
import invoices from "../../assets/img/invoices.png";
import availability from "../../assets/img/availability.png";
import arr from "../../assets/img/arr.png";
import out from "../../assets/img/out.png";
import gate from "../../assets/img/logout.png";

const themes = {
  focused: () => `
color: #d4145a;
background-color:  #d9daf3;
  `,
  visible: () => `
  display: block;  
    `,
};

export const Drawer = () => {
  return (
    <Container>
      <Content>
        <Path>
          <PathTitle> Your path</PathTitle>

          <NavLink $variant={themes[`focused`]}>
            <LinkLeftSide>
              <LinkImg src={calendar} alt="Calendar" />
              <LinkTitle>Agenda</LinkTitle>
            </LinkLeftSide>
            <ArrowImg src={arr} alt="arrow" $variant={themes[`visible`]} />
          </NavLink>

          <NavLink>
            <LinkLeftSide>
              <LinkImg src={exercises} alt="Exercises" />
              <LinkTitle>Exercises</LinkTitle>
            </LinkLeftSide>
            <ArrowImg src={arr} alt="arrow" />
          </NavLink>

          <NavLink>
            <LinkLeftSide>
              <LinkImg src={materials} alt="Materials" />
              <LinkTitle>Materials</LinkTitle>
            </LinkLeftSide>
            <ArrowImg src={arr} alt="arrow" />
          </NavLink>
        </Path>

        <Profile>
          <ProfileTitle> Your Profile</ProfileTitle>

          <NavLink>
            <LinkLeftSide>
              <LinkImg src={personal} alt="Personal info" />
              <LinkTitle>Personal information</LinkTitle>
            </LinkLeftSide>
            <ArrowImg src={arr} alt="arrow" />
          </NavLink>

          <NavLink>
            <LinkLeftSide>
              <LinkImg src={invoices} alt="Invoices info" />
              <LinkTitle>Invoices</LinkTitle>
            </LinkLeftSide>
            <ArrowImg src={arr} alt="arrow" />
          </NavLink>

          <NavLink>
            <LinkLeftSide>
              <LinkImg src={availability} alt="Availability" />
              <LinkTitle>Availability</LinkTitle>
            </LinkLeftSide>
            <ArrowImg src={arr} alt="arrow" />
          </NavLink>
        </Profile>
      </Content>

      <Logout>
        <img src={out} gate="out" />
        <LogoutImg src={gate} alt="gate" />
        Logout
      </Logout>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  max-width: 300px;
  width: 100%;
  height: 100vh;
  color: #2d224c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Path = styled.div`
  max-width: 200px;
  width: 100%;
  margin-bottom: 50px;
`;

const PathTitle = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: #d4145a;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const ProfileTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #d4145a;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Profile = styled.div`
  max-width: 200px;
  width: 100%;
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: #d9daf3;
  }
  ${({ $variant }) => $variant}
`;

const LinkLeftSide = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
`;
const LinkImg = styled.img`
  margin-right: 15px;
  width: 20px;
  height: 20px;
`;

const LinkTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const ArrowImg = styled.img`
  display: none;
  ${({ $variant }) => $variant}
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 10px 10px;
  cursor: pointer;
  max-width: 200px;
  width: 100%;
  &:hover {
    background-color: #d9daf3;
  }
  margin-bottom: 50px;
`;

const LogoutImg = styled.img`
  margin-right: 16px;
`;
