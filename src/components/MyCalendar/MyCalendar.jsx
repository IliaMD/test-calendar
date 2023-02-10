import React, { useState } from "react";
import styled from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Header, StyledModal, CustomEvent } from "../";
import { useRecoilValue } from "recoil";
import { timezone } from "../Header/Header";
import { eventsList } from "../../utils/mock";
import "moment-timezone";
import "../../assets/sass/styles.scss";

export const MyCalendar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [needableModal, setNeedableModal] = useState();

  const usableTimezone = useRecoilValue(timezone);
  const usableMoment = moment.tz.setDefault(usableTimezone.value);
  const localizer = momentLocalizer(usableMoment);

  function openModal(e) {
    setIsOpen(true);
    setNeedableModal(e);
  }

  return (
    <Root id="root">
      <Calendar
        localizer={localizer}
        events={eventsList}
        onSelectEvent={(e) => openModal(e)}
        components={{
          toolbar: Header,
          month: { event: CustomEvent },
        }}
        drilldownView={null}
      />
      <StyledModal
        onCloseModal={() => setIsOpen(false)}
        onIsOpen={modalIsOpen}
        onModal={needableModal}
      />
    </Root>
  );
};

const Root = styled.div`
  margin: 20px 20px;
  height: 90vh;
  background-color: #2d224c;
`;
