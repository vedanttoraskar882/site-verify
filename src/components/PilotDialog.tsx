import { useEffect, useRef, useState } from "react";
import { saveSiteVerityPilotRequest } from "../utils/pilotStorage";
import { CloseIcon } from "./Icons";

interface PilotDialogProps {
  open: boolean;
  onClose: () => void;
}

type FeedbackState =
  | { kind: "success"; message: string }
  | { kind: "error"; message: string }
  | null;

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export function PilotDialog({ open, onClose }: PilotDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const [feedback, setFeedback] = useState<FeedbackState>(null);

  useEffect(() => {
    if (!open) {
      setFeedback(null);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.requestAnimationFrame(() => {
      fullNameRef.current?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((el) => el.getClientRects().length > 0);

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (!active || active === first || !dialogRef.current.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (!active || active === last || !dialogRef.current.contains(active)) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      const saved = saveSiteVerityPilotRequest(form);
      if (!saved) {
        const firstInvalid = form.querySelector<HTMLElement>(":invalid");
        if (firstInvalid && document.activeElement !== firstInvalid) {
          firstInvalid.focus();
        }
        return;
      }

      form.reset();
      setFeedback({
        kind: "success",
        message: "Your pilot request has been saved in this browser.",
      });
    } catch {
      setFeedback({
        kind: "error",
        message:
          "This browser could not save your request. Please check browser storage settings and try again.",
      });
    }
  }

  return (
    <div
      className="dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="dialog-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pilot-dialog-title"
        aria-describedby="pilot-dialog-notice"
      >
        <div className="dialog-header">
          <h2 id="pilot-dialog-title" className="dialog-title">
            Request a Pilot
          </h2>
          <button
            type="button"
            className="dialog-close"
            aria-label="Close pilot request dialog"
            onClick={onClose}
          >
            <CloseIcon />
            <span>Close</span>
          </button>
        </div>

        <p id="pilot-dialog-notice" className="dialog-notice">
          This form saves your pilot request in this browser only. Your details
          are not sent to SiteVerity.
        </p>

        {feedback && (
          <div
            role={feedback.kind === "error" ? "alert" : "status"}
            aria-live={feedback.kind === "error" ? "assertive" : "polite"}
            className={`dialog-feedback dialog-feedback--${feedback.kind}`}
          >
            <span>{feedback.message}</span>
            <button
              type="button"
              className="dialog-feedback-dismiss"
              onClick={() => setFeedback(null)}
            >
              Dismiss
            </button>
          </div>
        )}

        <form
          ref={formRef}
          className="pilot-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="form-field">
            <label htmlFor="pilot-fullName" className="form-label">
              Full Name{" "}
              <span className="form-required-mark" aria-hidden="true">
                *
              </span>
            </label>
            <input
              ref={fullNameRef}
              id="pilot-fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label htmlFor="pilot-phoneNumber" className="form-label">
              Phone Number{" "}
              <span className="form-required-mark" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="pilot-phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              required
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label htmlFor="pilot-emailAddress" className="form-label">
              Email Address{" "}
              <span className="form-required-mark" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="pilot-emailAddress"
              name="emailAddress"
              type="email"
              autoComplete="email"
              required
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label htmlFor="pilot-organisationName" className="form-label">
              Organisation Name{" "}
              <span className="form-required-mark" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="pilot-organisationName"
              name="organisationName"
              type="text"
              autoComplete="organization"
              required
              className="form-input"
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save pilot request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
