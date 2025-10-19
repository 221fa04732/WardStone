-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "newsTitle" TEXT NOT NULL,
    "newsDescription" TEXT NOT NULL,
    "newsAuthor" TEXT NOT NULL,
    "newsAuthorDesignation" TEXT NOT NULL,
    "newsPostedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);
