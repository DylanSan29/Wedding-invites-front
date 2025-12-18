import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./PersonalInvitation.css";

const PersonalInvitation = () => {
  const [response, setResponse] = useState(null);

  const invitationId = "WEDDING-INVITE-2025-001";

  return (
    <div className="invitation-wrapper">
      <div className="invitation-card">
        <h1 className="couple-names">Sofía & Alejandro</h1>

        <p className="invitation-text">
          With great joy, we invite you to celebrate our wedding day.
        </p>

        <div className="event-details">
          <p>📍 Hacienda San Miguel</p>
          <p>📅 June 22, 2025</p>
          <p>🕒 6:00 PM</p>
        </div>

        {!response && (
          <div className="rsvp-actions">
            <p className="question">Will you attend?</p>
            <button
              className="btn confirm"
              onClick={() => setResponse("confirmed")}
            >
              Yes, I will attend
            </button>
            <button
              className="btn decline"
              onClick={() => setResponse("declined")}
            >
              Sorry, I can't attend
            </button>
          </div>
        )}

        {response === "confirmed" && (
          <div className="confirmation-section">
            <p className="thank-you">
              Thank you for confirming your attendance 🤍
            </p>

            <div className="qr-container">
              <QRCode value={invitationId} size={180} />
            </div>

            <p className="qr-note">
              Please present this QR code at the entrance.
            </p>
          </div>
        )}

        {response === "declined" && (
          <div className="declined-section">
            <p className="declined-text">
              Thank you for letting us know. You will be missed 🤍
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInvitation;
