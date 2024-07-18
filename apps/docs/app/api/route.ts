import { PrismaClient } from "@paytem/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


const client = new PrismaClient();


export default function handler(req:any, res:any) {
    res.status(200).json({ text: 'Hello' });
  }
export const GET = async () => {
    await client.user.create({
        data: {
            email: "asd",
            name: "adsads"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}


