import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { v4 as uuidv4 } from 'uuid';

export function getDeviceId() {
    let deviceId = localStorage.getItem('UDID');
    if (!deviceId) {
        deviceId = uuidv4(); // generate new UUID
        localStorage.setItem('UDID', deviceId);
    }
    return deviceId;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
