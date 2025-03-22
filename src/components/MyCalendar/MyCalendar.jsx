import { useEffect, useState } from "react";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";

import moment from "moment/moment";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

import "@schedule-x/theme-default/dist/index.css";
import styles from "./MyCalendar.module.css";
import EventModal from "../EventModal/EventModal";

function MyCalendar() {
  const [events, setEvents] = useState([
    {
      id: uuidv4(),
      title: "Existing Event",
      start: "2025-03-23 12:00",
      end: "2025-03-23 13:00",
      color: "#3b86ff",
    },
    {
      id: uuidv4(),
      title: "New Event",
      start: "2025-03-22 08:00",
      end: "2025-03-22 10:00",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEventData, setModalEventData] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [eventColor, setEventColor] = useState("#3b86ff");
  const [eventsService] = useState(createEventsServicePlugin);

  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events,
    plugins: [
      eventsService,
      createEventModalPlugin({
        onSave: (newEvent) => {
          toast.success("Saved new event");
          eventsService.add(newEvent);
          setEvents((prevEvents) => [...prevEvents, newEvent]);
          setIsModalOpen(false);
        },
        onCancel: () => {
          setIsModalOpen(false);
        },
      }),
      createDragAndDropPlugin(),
    ],
    callbacks: {
      onClickDateTime(dateTime) {
        setModalEventData({
          start: dateTime,
          end: dateTime,
        });
        setIsModalOpen(true);
      },
    },
  });

  const generateColorFromId = (id) => {
    if (!id) return "#3b86ff";

    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += ("00" + value.toString(16)).slice(-2);
    }
    return color;
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEventTitle("");
    setEventDate("");
    setEventTime("");
    setEventDetails("");
    setEventColor("#3b86ff");
  };

  const handleSaveEvent = () => {
    const eventDateTime = moment(
      `${eventDate}T${eventTime}:00`,
      "YYYY-MM-DDTHH:mm:ss"
    );

    const formattedStartTime = eventDateTime.format("YYYY-MM-DD HH:mm");
    const formattedEndTime = eventDateTime
      .clone()
      .add(1, "hour")
      .format("YYYY-MM-DD HH:mm");

    const newEvent = {
      id: uuidv4(),
      title: eventTitle,
      start: formattedStartTime,
      end: formattedEndTime,
      details: eventDetails,
      color: eventColor || generateColorFromId(uuidv4() || "default"),
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
    eventsService.add(newEvent);
    handleModalClose();
  };

  const handleColorChange = (color) => {
    setEventColor(color.hex);
    document.documentElement.style.setProperty(
      "--sx-color-primary-container",
      color.hex
    );
  };

  useEffect(() => {
    if (modalEventData) {
      setEventDate(moment(modalEventData.start).format("YYYY-MM-DD"));
      setEventTime(moment(modalEventData.start).format("HH:mm"));
      setEventColor(
        modalEventData.color ||
          generateColorFromId(modalEventData.id || "default")
      );
    }
  }, [modalEventData]);

  const handleDeleteEvent = () => {
    if (modalEventData?.id) {
      eventsService.remove(modalEventData.id);
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== modalEventData.id)
      );
      handleModalClose();
    }
  };

  return (
    <div className={styles.calendar}>
      <ScheduleXCalendar
        calendarApp={calendar}
        className={styles.calendarContent}
        eventRenderer={(event) => ({
          style: { backgroundColor: event.color },
        })}
      />

      <EventModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
        eventTitle={eventTitle}
        eventDate={eventDate}
        eventTime={eventTime}
        eventDetails={eventDetails}
        eventColor={eventColor}
        setEventTitle={setEventTitle}
        setEventDate={setEventDate}
        setEventTime={setEventTime}
        setEventDetails={setEventDetails}
        handleSaveEvent={handleSaveEvent}
        handleColorChange={handleColorChange}
        handleDeleteEvent={handleDeleteEvent}
      />
    </div>
  );
}

export default MyCalendar;
