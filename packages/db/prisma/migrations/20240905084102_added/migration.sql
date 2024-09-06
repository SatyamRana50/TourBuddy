-- CreateTable
CREATE TABLE "guides" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "experience" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "guides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "languages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" SERIAL NOT NULL,
    "guideId" INTEGER NOT NULL,
    "customer" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GuideLanguages" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "languages_name_key" ON "languages"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GuideLanguages_AB_unique" ON "_GuideLanguages"("A", "B");

-- CreateIndex
CREATE INDEX "_GuideLanguages_B_index" ON "_GuideLanguages"("B");

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_guideId_fkey" FOREIGN KEY ("guideId") REFERENCES "guides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GuideLanguages" ADD CONSTRAINT "_GuideLanguages_A_fkey" FOREIGN KEY ("A") REFERENCES "guides"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GuideLanguages" ADD CONSTRAINT "_GuideLanguages_B_fkey" FOREIGN KEY ("B") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
