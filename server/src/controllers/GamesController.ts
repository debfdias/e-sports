import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";

export class GamesController {
  async listAll(request: Request, response: Response) {
    const games = await prisma.games.findMany({
      include: {
        _count: {
          select: {
            ads: true
          }
        }
      }
    });
    
    return response.json(games);
  }
}