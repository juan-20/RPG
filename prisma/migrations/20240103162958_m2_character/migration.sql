-- CreateTable
CREATE TABLE "Character" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "AvatarURL" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "class" TEXT NOT NULL,
    "alignment" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" INTEGER NOT NULL,
    "eyes" TEXT NOT NULL,
    "skin" TEXT NOT NULL,
    "hair" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "Atuallife" INTEGER NOT NULL,
    "temporarylife" INTEGER NOT NULL,
    "maxlife" INTEGER NOT NULL,
    "temporaryLife" INTEGER NOT NULL,
    "mana" INTEGER NOT NULL,
    "displacement" INTEGER NOT NULL,
    "ac" INTEGER NOT NULL,
    "initiative" INTEGER NOT NULL,
    "cdToAvoidMagic" INTEGER NOT NULL,
    "modAtackMagic" INTEGER NOT NULL,
    "spellcastingAttribute" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spells" (
    "SpellName" TEXT NOT NULL,
    "Concentration" BOOLEAN NOT NULL,
    "Description" TEXT NOT NULL,
    "Duration" TEXT NOT NULL,
    "Level" INTEGER NOT NULL,
    "Material" TEXT NOT NULL,
    "Reach" TEXT NOT NULL,
    "Ritual" BOOLEAN NOT NULL,
    "School" TEXT NOT NULL,
    "Time" TEXT NOT NULL,
    "Classes" TEXT[],
    "Somatic" BOOLEAN NOT NULL,
    "Verbal" BOOLEAN NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "Spells_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpellsOnCharacter" (
    "characterId" INTEGER NOT NULL,
    "spellId" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "SpellsOnCharacter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_id_key" ON "Character"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Spells_id_key" ON "Spells"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SpellsOnCharacter_id_key" ON "SpellsOnCharacter"("id");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellsOnCharacter" ADD CONSTRAINT "SpellsOnCharacter_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellsOnCharacter" ADD CONSTRAINT "SpellsOnCharacter_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spells"("id") ON DELETE CASCADE ON UPDATE CASCADE;
