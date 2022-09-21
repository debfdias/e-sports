import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";
import { ConvertHoursToMinutes } from "../utils/ConvertHoursToMinutes";

export class AdsController {
  async listAll(request: Request, response: Response) {
    const ads = await prisma.ads.findMany();
    
    return response.json(ads);
  }

  async listByGame(request: Request, response: Response) {
    const { game_id } = request.params;

    const ads = await prisma.ads.findMany({ 
      select: {
        id: true,
        name: true,
        weekDays: true,
        hourEnd: true,
        hourStart: true,
        useVoiceChannel: true,
        yearsPlaying: true
      },
      where: { 
        game_id: game_id
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return response.json(ads);
  }

  async listByDiscord(request: Request, response: Response) {
    const { ad_id } = request.params;

    const ad = await prisma.ads.findUniqueOrThrow({ 
      select: {
        discord:true
      },
      where: { 
        id: ad_id
      }
    });
    
    return response.json({
      discord: ad.discord
    });
  }

  async create(request: Request, response: Response) {
    const { game_id } = request.params;
    const { name, 
            yearsPlaying,
            discord,
            weekDays,
            hourStart,
            hourEnd,
            useVoiceChannel } = request.body;


            console.log(request.body)
    const ad = await prisma.ads.create({
      data: {
        game_id,
        name, 
        yearsPlaying,
        discord,
        weekDays,
        hourStart: ConvertHoursToMinutes(hourStart),
        hourEnd: ConvertHoursToMinutes(hourEnd),
        useVoiceChannel
      }
    })
          
    return response.status(201).json(ad);
  }
}