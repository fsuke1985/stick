import type { NextApiRequest, NextApiResponse } from "next/types";
import { fetcher } from "../../../lib/fetcher";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const i:AppleMusicApi = await fetcher("https://stick-9on9oxd6.an.gateway.dev/")
    return res.end(JSON.stringify(i))
}