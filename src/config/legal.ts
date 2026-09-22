function envValue(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

export const LEGAL_DETAILS = {
  company: envValue(import.meta.env.VITE_LEGAL_COMPANY, '[Unternehmensname in der Produktionsumgebung erforderlich]'),
  address: envValue(import.meta.env.VITE_LEGAL_ADDRESS, '[Geschäftsanschrift in der Produktionsumgebung erforderlich]'),
  representative: envValue(import.meta.env.VITE_LEGAL_REPRESENTATIVE, '[Vertretungsberechtigte Person in der Produktionsumgebung erforderlich]'),
  register: envValue(import.meta.env.VITE_LEGAL_REGISTER, '[Registergericht und Registernummer in der Produktionsumgebung erforderlich]'),
  vatId: envValue(import.meta.env.VITE_LEGAL_VAT_ID, '[USt-IdNr. in der Produktionsumgebung erforderlich]'),
  email: envValue(import.meta.env.VITE_SUPPORT_EMAIL, '[Support-E-Mail in der Produktionsumgebung erforderlich]'),
  phone: envValue(import.meta.env.VITE_LEGAL_PHONE, ''),
  dpoEmail: envValue(import.meta.env.VITE_LEGAL_DPO_EMAIL, ''),
  supervisoryAuthority: envValue(import.meta.env.VITE_LEGAL_SUPERVISORY_AUTHORITY, ''),
}

export const LEGAL_DETAILS_READY = [
  LEGAL_DETAILS.company,
  LEGAL_DETAILS.address,
  LEGAL_DETAILS.representative,
  LEGAL_DETAILS.register,
  LEGAL_DETAILS.vatId,
  LEGAL_DETAILS.email,
].every((value) => value && !value.startsWith('['))
