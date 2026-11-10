interface IconProps {
  className?: string;
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 8h9" />
      <path d="M9 4.5L12.5 8 9 11.5" />
    </svg>
  );
}

export function PlusMinusIcon({
  open,
  className,
}: IconProps & { open: boolean }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2.5 7h9" />
      {!open && <path d="M7 2.5v9" />}
    </svg>
  );
}

export function MenuIcon({
  open,
  className,
}: IconProps & { open: boolean }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M4.5 4.5l9 9" />
          <path d="M13.5 4.5l-9 9" />
        </>
      ) : (
        <>
          <path d="M3 5h12" />
          <path d="M3 9h12" />
          <path d="M3 13h12" />
        </>
      )}
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 4l8 8" />
      <path d="M12 4l-8 8" />
    </svg>
  );
}

export function OutcomeGlyph({
  tone,
}: {
  tone: "verified" | "exception" | "low-confidence" | "agreed-reason" | "missed";
}) {
  if (tone === "verified") {
    return (
      <svg
        width="13"
        height="13"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2.8 7.3L5.6 10.1 11.2 4" />
      </svg>
    );
  }

  if (tone === "low-confidence") {
    return (
      <svg
        width="13"
        height="13"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="7" cy="7" r="5" />
        <path d="M7 4.4v3" />
        <circle cx="7" cy="9.6" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (tone === "missed") {
    return (
      <svg
        width="13"
        height="13"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M4 4l6 6" />
        <path d="M10 4l-6 6" />
      </svg>
    );
  }

  // agreed-reason / exception: hollow diamond
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 2.2L11.8 7 7 11.8 2.2 7Z" />
    </svg>
  );
}
