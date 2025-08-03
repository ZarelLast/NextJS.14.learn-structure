"use client";

import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { redirectByRole } from "@/lib/auth";

import Stack from "@mui/material/Stack";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

import TextInput from "@/components/input/Text";

import { useFormState } from "@/hooks/useFormState";
import {
  hasNumber,
  hasUppercase,
  isEmail,
  required,
  hasSpecialChar,
  minLength,
} from "@/utils/validators";
import { Visibility, VisibilityOff, Email } from "@mui/icons-material";

export default function LoginPage() {
  const { setUser } = useAuth();
  const [role, setRole] = useState<"admin" | "user">("user");
  const { values, errors, handleChange, handleBlur, handleSubmit, resetForm } =
    useFormState(
      { email: "", password: "" },
      {
        email: [required(), isEmail()],
        password: [
          required(),
          hasNumber(),
          hasUppercase(),
          hasSpecialChar(),
          minLength(8),
        ],
      }
    );
  const [show, setShow] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit((vals) => {
      const fakeUser = {
        id: "1",
        name: "Ilham",
        email: vals.email,
        role,
      };
      setUser(fakeUser);
      document.cookie = `token=12345; path=/`;

      window.location.href = redirectByRole(role);
      resetForm();
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Stack spacing={2}>
          <TextInput
            type="email"
            label="Email"
            placeholder="Masukan Email"
            value={values.email}
            onChange={(val) => handleChange("email", val)}
            onBlur={() => handleBlur("email")}
            error={errors.email}
            startIcon={<Email />}
          />
          <TextInput
            type={show ? "text" : "password"}
            label="Password"
            placeholder="Masukan Password"
            value={values.password}
            onChange={(val) => handleChange("password", val)}
            onBlur={() => handleBlur("password")}
            error={errors.password}
            endIcon={show ? <VisibilityOff /> : <Visibility />}
            onEndIconClick={() => setShow((prev) => !prev)}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              variant="outlined"
              onChange={(e) => setRole(e.target.value as any)}
            >
              <MenuItem value={"user"}>User</MenuItem>
              <MenuItem value={"admin"}>Admin</MenuItem>
            </Select>
          </FormControl>
          <button type="submit">Login</button>
        </Stack>
      </form>
    </div>
  );
}
