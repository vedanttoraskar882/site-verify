export const PILOT_STORAGE_PREFIX = "siteverity.pilotRequest.";

export interface PilotRequestRecord {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  submissionDateTime: string;
}

export function saveSiteVerityPilotRequest(form: HTMLFormElement): boolean {
  const fields = ["fullName", "phoneNumber", "emailAddress", "organisationName"] as const;
  const values: Record<string, string> = {};

  for (const field of fields) {
    const input = form.elements.namedItem(field) as HTMLInputElement;
    input.value = input.value.trim();
    values[field] = input.value;
  }

  if (!form.reportValidity()) return false;

  const record: PilotRequestRecord = {
    fullName: values.fullName,
    phoneNumber: values.phoneNumber,
    emailAddress: values.emailAddress,
    organisationName: values.organisationName,
    submissionDateTime: new Date().toISOString(),
  };

  const bytes = crypto.getRandomValues(new Uint8Array(16));
  const id = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  localStorage.setItem(PILOT_STORAGE_PREFIX + id, JSON.stringify(record));
  return true;
}
