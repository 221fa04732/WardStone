-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
