function envValue(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

export const LEGAL_DETAILS = {
  company: envValue(import.meta.env.VITE_LEGAL_COMPANY, '[Şirket unvanı production ortamında tanımlanmalı]'),
  address: envValue(import.meta.env.VITE_LEGAL_ADDRESS, '[Şirket adresi production ortamında tanımlanmalı]'),
  representative: envValue(import.meta.env.VITE_LEGAL_REPRESENTATIVE, '[Yasal temsilci production ortamında tanımlanmalı]'),
  register: envValue(import.meta.env.VITE_LEGAL_REGISTER, '[Ticaret sicili ve numarası production ortamında tanımlanmalı]'),
  vatId: envValue(import.meta.env.VITE_LEGAL_VAT_ID, '[USt-IdNr. production ortamında tanımlanmalı]'),
  email: envValue(import.meta.env.VITE_SUPPORT_EMAIL, '[Destek e-postası production ortamında tanımlanmalı]'),
}

export const LEGAL_DETAILS_READY = Object.values(LEGAL_DETAILS).every((value) => !value.startsWith('['))
