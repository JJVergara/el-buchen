import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind CSS classes with proper precedence
 * @param inputs - Array of class values to be merged
 * @returns Merged class string
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}

/**
 * Type-safe assertion that a value is not null or undefined
 * @param value - Value to check
 * @throws Error if value is null or undefined
 */
export function assertValue<T>(
  value: T | null | undefined,
  message = "Value is required"
): asserts value is T {
  if (value === null || value === undefined) {
    throw new Error(message)
  }
}

/**
 * Type-safe way to format a date
 * @param date - Date to format
 * @param locale - Locale to use for formatting
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | string,
  locale: string = "en-US"
): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return dateObj.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function formatDateSpanish(date: string) {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
