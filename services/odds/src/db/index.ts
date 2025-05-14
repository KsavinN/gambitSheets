import { PrismaClient } from '@prisma/client';

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Export the PrismaClient instance to be used in other parts of the application
export default prisma; 