import Modal from "react-modal";
import React from "react";
import styled from "styled-components";
import profileImg from "../../assets/img/profileImg.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    maxWidth: "550px",
    width: "100%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFFFFF",
    borderRadius: "19px",
    zIndex: "1",
  },
};

const themes = {
  true: () => `
    color: #8065C9;

  `,

  false: () => `
    color: #d4145a;
    `,
};

Modal.setAppElement("#root");

export const StyledModal = ({ onIsOpen, onCloseModal, onModal }) => {
  return (
    <div>
      <Modal
        isOpen={onIsOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Content>
          <TopPart>
            <Title>
              <Titletext>{onModal?.title}</Titletext>
              <TopicText>Topic: {onModal?.topic}</TopicText>
            </Title>
            <div>
              <ProfileImg src={profileImg} alt="profile image" />
              <ProfileName>Liam</ProfileName>
            </div>
          </TopPart>

          <DateBlock>
            <div>
              <BlockTitle>Date</BlockTitle>
              <BlockText $variant={themes[`${onModal?.isOver}`]}>
                {onModal?.start.toDateString()}
              </BlockText>
            </div>
            <div>
              <BlockTitle>Time</BlockTitle>
              <BlockText $variant={themes[`${onModal?.isOver}`]}>
                {onModal?.time}
              </BlockText>
            </div>
            <div>
              <BlockTitle>Duration</BlockTitle>
              <BlockText $variant={themes[`${onModal?.isOver}`]}>
                {onModal?.duration}
              </BlockText>
            </div>
          </DateBlock>

          <JoinBtn
            style={{ background: onModal?.isOver ? "#8065C9" : " #d4145a" }}
          >
            {onModal?.isOver ? "WATCH RECORDING" : "JOIN"}
          </JoinBtn>

          <BottomPart>
            <Material>Material:</Material>
            <Links>
              <Link href="https://github.com/IliaMD">
                Video Listening Introduzione
              </Link>
              <Link href="https://github.com/IliaMD">
                Video Listening Introduzione
              </Link>
            </Links>
          </BottomPart>
        </Content>
      </Modal>
    </div>
  );
};

const Content = styled.div`
  margin: 0px 20px;
  font-family: "Poppins", sans-serif;
`;

const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Title = styled.div`
  margin-top: 30px;
`;

const Titletext = styled.p`
  font-weight: 700;
  font-size: 36px;
  color: #2d224c;
  margin-bottom: 20px;
`;

const TopicText = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #2d224c;
`;

const ProfileImg = styled.img`
  width: 72px;
  height: 72px;
  margin-right: 18px;
`;

const ProfileName = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: #2d224c;
`;

const DateBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const BlockTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: #2d224c;
  margin-bottom: 12px;
`;

const BlockText = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #d4145a;
  margin-bottom: 33px;
  ${({ $variant }) => $variant}
`;

const JoinBtn = styled.div`
  border-radius: 11px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-bottom: 25px;
`;

const BottomPart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Material = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #2d224c;
  margin-right: 25px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  font-weight: 400;
  font-size: 20px;
  color: #2d224c;
  text-decoration-line: underline;
  margin-bottom: 10px;
`;
