/*
  Warnings:

  - The `jobDescription` column on the `Jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "jobDescription",
ADD COLUMN     "jobDescription" TEXT[];
