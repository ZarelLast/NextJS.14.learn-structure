import { useState } from "react";

type ValidatorFn = (value: string) => string | null;

export function useFormState<T extends Record<string, string>>(
  initialValues: T,
  validators: Partial<Record<keyof T, ValidatorFn[]>>
) {
  const [values, setValues] = useState<T>(initialValues);

  // ✅ pakai Record<keyof T, ...> supaya type aman
  const [errors, setErrors] = useState<Record<keyof T, string | null>>(
    Object.keys(initialValues).reduce((acc, key) => {
      acc[key as keyof T] = null;
      return acc;
    }, {} as Record<keyof T, string | null>)
  );

  const [touched, setTouched] = useState<Record<keyof T, boolean>>(
    Object.keys(initialValues).reduce((acc, key) => {
      acc[key as keyof T] = false;
      return acc;
    }, {} as Record<keyof T, boolean>)
  );

  const runValidation = (field: keyof T, value: string) => {
    const rules = validators[field];
    if (!rules) return null;

    for (let rule of rules) {
      const error = rule(value);
      if (error) return error; // stop di error pertama
    }
    return null;
  };

  const handleChange = (field: keyof T, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: runValidation(field, value),
      }));
    }
  };

  const handleBlur = (field: keyof T) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: runValidation(field, values[field]),
    }));
  };

  const handleSubmit = (onValid: (vals: T) => void) => {
    let newErrors = {} as Record<keyof T, string | null>;
    let hasError = false;

    (Object.keys(validators) as (keyof T)[]).forEach((field) => {
      const error = runValidation(field, values[field]);
      newErrors[field] = error;
      if (error) hasError = true;
    });

    setErrors(newErrors);

    const allTouched = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {} as Record<keyof T, boolean>
    );
    setTouched(allTouched);

    if (!hasError) onValid(values);
  };

  const resetForm = () => {
    setValues(initialValues);

    const emptyErrors = Object.keys(initialValues).reduce(
      (acc, key) => ({ ...acc, [key]: null }),
      {} as Record<keyof T, string | null>
    );

    const emptyTouched = Object.keys(initialValues).reduce(
      (acc, key) => ({ ...acc, [key]: false }),
      {} as Record<keyof T, boolean>
    );

    setErrors(emptyErrors);
    setTouched(emptyTouched);
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
}
