import React, { useState } from "react";
import styled from "styled-components";
import prev from "../../assets/img/prev.png";
import next from "../../assets/img/next.png";
import moment from "moment";
import TimezoneSelect from "react-timezone-select";
import { atom, useRecoilState } from "recoil";
import { DateTime } from "luxon";

export const timezone = atom({
  key: "timezone",
  default: {},
});

export const Header = (toolbar) => {
  const [selectedTimezone, setSelectedTimezone] = useRecoilState(timezone);
  const [selectOpen, setSelectOpen] = useState(false);

  const formatingnow =
    DateTime.now().toFormat(`z`) +
    " " +
    "GMT" +
    " " +
    DateTime.now().toFormat(`ZZ`);

  const dateArr = selectedTimezone?.label?.split(" ");
  const elemGMT = dateArr?.shift().slice(1, -1);
  const newArr = [elemGMT, ...(dateArr || [])];
  const finallyZone = newArr?.reverse().join(" ");

  const date = moment(toolbar.date);

  const hadleSelectOpen = () => {
    setSelectOpen(!selectOpen);
  };

  const handleChangeTimezone = (value) => {
    setSelectedTimezone(value);
    hadleSelectOpen();
  };

  return (
    <>
      <Head>
        <MonthTitle>
          <b>{date.format("MMMM")}</b>
          <span> {date.format("YYYY")}</span>
        </MonthTitle>

        <LeftImg src={prev} onClick={() => toolbar.onNavigate("PREV")} />
        <RightImg src={next} onClick={() => toolbar.onNavigate("NEXT")} />

        <TodayBtn onClick={() => toolbar.onNavigate("TODAY")}>Today</TodayBtn>

        {selectOpen ? (
          <TimezoneSelectStyled
            autoFocus
            onBlur={hadleSelectOpen}
            value={selectedTimezone}
            onChange={(value) => handleChangeTimezone(value)}
          />
        ) : (
          <TimeZoneBtn onClick={hadleSelectOpen}>
            {finallyZone ? finallyZone : formatingnow}
          </TimeZoneBtn>
        )}
      </Head>
    </>
  );
};

const Head = styled.div`
  padding: 30px 30px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
`;

const MonthTitle = styled.h1`
  max-width: 340px;
  width: 100%;
  color: #ffffff;
  font-size: 36px;
  font-weight: 600;
`;

const LeftImg = styled.img`
  margin-right: 20px;
  cursor: pointer;
`;

const RightImg = styled.img`
  cursor: pointer;
`;

const TodayBtn = styled.button`
  background: #d9daf3;
  border-radius: 7px;
  padding: 5px 10px;
  font-weight: 500;
  font-size: 20px;
  border: none;
  margin: 0px 15px;
`;

const TimeZoneBtn = styled.button`
  background: #d9daf3;
  border-radius: 7px;
  padding: 5px 10px;
  font-weight: 500;
  font-size: 20px;
  border: none;
`;

const TimezoneSelectStyled = styled(TimezoneSelect)`
  max-width: 300px;
  width: 100%;
  height: 33px;
`;
