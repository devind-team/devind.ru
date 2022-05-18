-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" DROP DEFAULT,
ALTER COLUMN "sirName" SET DEFAULT E'',
ALTER COLUMN "avatar" SET DEFAULT E'',
ALTER COLUMN "birthday" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "metadata" JSONB NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "jwt" TEXT NOT NULL,
    "refresh" TEXT NOT NULL,
    "revoked" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Token_jwt_key" ON "Token"("jwt");

-- CreateIndex
CREATE UNIQUE INDEX "Token_refresh_key" ON "Token"("refresh");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
