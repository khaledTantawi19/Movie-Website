import React from "react";
import Modal from "react-modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendarModal.css"; // Create this file for custom styles

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  },
  overlay: {
    zIndex: 9999,
  },
};

function CalendarModal({ isOpen, onRequestClose, onDateChange, selectedDate }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Calendar Modal"
    >
      <Calendar onChange={onDateChange} value={selectedDate} />
      <button onClick={onRequestClose} className="close-button">
        Close
      </button>
    </Modal>
  );
}

export default CalendarModal;
