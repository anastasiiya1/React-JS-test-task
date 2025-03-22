import { Modal, Button, TextField } from "@mui/material";
import { RiCalendar2Fill } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SketchPicker } from "react-color";

import styles from "./EventModal.module.css";

export default function EventModal({
  isModalOpen,
  handleModalClose,
  eventTitle,
  eventDate,
  eventTime,
  eventDetails,
  eventColor,
  setEventTitle,
  setEventDate,
  setEventTime,
  setEventDetails,
  handleSaveEvent,
  handleColorChange,
  handleDeleteEvent,
}) {
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="create-event-modal"
        aria-describedby="modal-for-creating-event"
      >
        <div className={styles.modalContent}>
          <div className={styles.closeIcon}>
            <IoIosCloseCircleOutline onClick={handleModalClose} />
          </div>
          <TextField
            label="Event name"
            variant="outlined"
            fullWidth
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value.slice(0, 30))}
            margin="normal"
          />

          <RiCalendar2Fill className={styles.iconDate} />
          <TextField
            placeholder="Event date"
            variant="outlined"
            fullWidth
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            margin="normal"
          />

          <GoClock className={styles.iconTime} />
          <TextField
            placeholder="Event time"
            variant="outlined"
            fullWidth
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            margin="normal"
          />

          <TextField
            label="Event details"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            margin="normal"
          />
          <SketchPicker color={eventColor} onChange={handleColorChange} />
          <div className={styles.modalActions}>
            <Button
              onClick={handleDeleteEvent}
              variant="outlined"
              color="secondary"
            >
              Discard
            </Button>

            <Button
              onClick={handleSaveEvent}
              variant="contained"
              color="primary"
              disabled={!eventTitle}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
