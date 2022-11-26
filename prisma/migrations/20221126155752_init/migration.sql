-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isGuild" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "rank" INTEGER NOT NULL DEFAULT 0,
    "pilot_license" TEXT NOT NULL DEFAULT 'NPL-3',
    "ships_count" INTEGER NOT NULL DEFAULT 0,
    "medals" INTEGER NOT NULL DEFAULT 0,
    "archivements" INTEGER NOT NULL DEFAULT 0,
    "member_type" INTEGER NOT NULL DEFAULT 1,
    "location" TEXT NOT NULL DEFAULT 'Earth',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShipsContent" (
    "id" SERIAL NOT NULL,
    "nova_id" TEXT NOT NULL,
    "ship_id" TEXT NOT NULL,
    "custom_name" TEXT,
    "userId" TEXT,

    CONSTRAINT "ShipsContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BranchContent" (
    "id" SERIAL NOT NULL,
    "defence" BOOLEAN NOT NULL DEFAULT false,
    "core" BOOLEAN NOT NULL DEFAULT false,
    "fronttiers" BOOLEAN NOT NULL DEFAULT false,
    "relief" BOOLEAN NOT NULL DEFAULT false,
    "skyline" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,

    CONSTRAINT "BranchContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ships" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "ships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShipContent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "type" JSONB[],
    "shup_pilot_license" TEXT NOT NULL,
    "shipId" INTEGER,

    CONSTRAINT "ShipContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" SERIAL NOT NULL,
    "html_name" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ShipsContent_id_key" ON "ShipsContent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BranchContent_id_key" ON "BranchContent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ships_id_key" ON "ships"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ShipContent_id_key" ON "ShipContent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Rank_id_key" ON "Rank"("id");

-- AddForeignKey
ALTER TABLE "ShipsContent" ADD CONSTRAINT "ShipsContent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranchContent" ADD CONSTRAINT "BranchContent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShipContent" ADD CONSTRAINT "ShipContent_shipId_fkey" FOREIGN KEY ("shipId") REFERENCES "ships"("id") ON DELETE SET NULL ON UPDATE CASCADE;
