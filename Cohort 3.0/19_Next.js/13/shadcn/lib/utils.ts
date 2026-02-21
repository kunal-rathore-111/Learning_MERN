import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// clsx is used to apply tailwind class with conditions
// twMerge is used to remove the conflict bw the various tailwind classes
// both are usefull when we create the variants for the ui comps and have to apply two or more variants on one comp
