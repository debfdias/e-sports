-- CreateTable
CREATE TABLE "ads" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "yearsPlaying" INTEGER NOT NULL,
    "discord" TEXT NOT NULL,
    "weekDays" JSONB NOT NULL,
    "hourStart" INTEGER NOT NULL,
    "hourEnd" INTEGER NOT NULL,
    "useVoiceChannel" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "game_id" TEXT NOT NULL,

    CONSTRAINT "ads_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ads" ADD CONSTRAINT "ads_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
