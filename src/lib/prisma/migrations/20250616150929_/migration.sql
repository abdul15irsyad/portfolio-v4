-- CreateTable
CREATE TABLE "contact_mes" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" TEXT,
    "message" TEXT,
    "approved_at" TIMESTAMPTZ,
    "is_anonymous" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "contact_mes_pkey" PRIMARY KEY ("id")
);
