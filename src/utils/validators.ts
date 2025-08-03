// utils/validators.ts
export const required =
  (msg = "Field ini wajib diisi") =>
  (value: string) =>
    value.trim() ? null : msg;

export const minLength = (len: number, msg?: string) => (value: string) =>
  value.length >= len ? null : msg || `Minimal ${len} karakter`;

export const maxLength = (len: number, msg?: string) => (value: string) =>
  value.length <= len ? null : msg || `Maksimal ${len} karakter`;

export const hasUppercase =
  (msg = "Harus ada huruf besar") =>
  (value: string) =>
    /[A-Z]/.test(value) ? null : msg;

export const hasNumber =
  (msg = "Harus ada angka") =>
  (value: string) =>
    /\d/.test(value) ? null : msg;

export const hasSpecialChar =
  (msg = "Harus ada karakter unik") =>
  (value: string) =>
    /[!@#$%^&*(),.?":{}|<>]/.test(value) ? null : msg;

export const isEmail =
  (msg = "Format email tidak valid") =>
  (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : msg;

export const isPhone =
  (msg = "Format nomor telepon tidak valid") =>
  (value: string) =>
    /^\+?\d+$/.test(value) ? null : msg;

export const isDate =
  (msg = "Format tanggal tidak valid") =>
  (value: string) =>
    /^\d{4}-\d{2}-\d{2}$/.test(value) ? null : msg;

export const isTime =
  (msg = "Format waktu tidak valid") =>
  (value: string) =>
    /^\d{2}:\d{2}$/.test(value) ? null : msg;

export const isDateTime =
  (msg = "Format tanggal waktu tidak valid") =>
  (value: string) =>
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value) ? null : msg;

export const isURL =
  (msg = "Format URL tidak valid") =>
  (value: string) =>
    /^(https?:\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(
      value
    )
      ? null
      : msg;

export const isCreditCard =
  (msg = "Format kartu kredit tidak valid") =>
  (value: string) =>
    /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value) ? null : msg;

export const isPostalCode =
  (msg = "Format kode pos tidak valid") =>
  (value: string) =>
    /^\d{5}$/.test(value) ? null : msg;
  