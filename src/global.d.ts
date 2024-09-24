// src/global.d.ts
import { PrismaClient } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient; // Use optional chaining to allow undefined
    }
  }
}

// This is necessary for the file to be treated as a module
export {};
