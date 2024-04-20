-- CreateTable
CREATE TABLE "quote_of_the_days" (
    "id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT,
    "tags" TEXT[],

    CONSTRAINT "quote_of_the_days_pkey" PRIMARY KEY ("id")
);
