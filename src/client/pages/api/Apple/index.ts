import type { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const i:AppleMusicApi = await fetch("https://stick-9on9oxd6.an.gateway.dev/").then(resp => resp.json())
    res.status(200).send(i)
}