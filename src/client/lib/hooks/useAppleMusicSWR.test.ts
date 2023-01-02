import { expect } from "@jest/globals"
import App from "next/app"
import { fetcher } from "../fetcher"
import useAppleMusicSWR from "./useAppleMusicSWR"

test('fetcher', async () => {

    await expect(fetcher("https://stick-9on9oxd6.an.gateway.dev/")).resolves.not.toBeNull()
//    console.log(i)
})

test('api called', async () => {
    const {data, error } = useAppleMusicSWR({} as AppleMusicApi)
})