"use client";
import { ReactNode } from "react"; // ✅ dari React

import { TextField, InputAdornment, IconButton } from "@mui/material";

type TextInputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string | null;
  type?: string;
  startIcon?: ReactNode; // Icon di kiri
  endIcon?: ReactNode; // Icon di kanan
  onEndIconClick?: () => void; // Event klik icon kanan (optional)
};

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  startIcon,
  endIcon,
  onEndIconClick,
}: TextInputProps) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      error={!!error}
      helperText={error || ""}
      fullWidth
      variant="outlined"
      InputProps={{
        startAdornment: startIcon ? (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ) : undefined,
        endAdornment: endIcon ? (
          <InputAdornment position="end">
            {onEndIconClick ? (
              <IconButton onClick={onEndIconClick} edge="end">
                {endIcon}
              </IconButton>
            ) : (
              endIcon
            )}
          </InputAdornment>
        ) : undefined,
      }}
    />
  );
}
