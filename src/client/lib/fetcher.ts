export const fetcher = async (args: string): Promise<AppleMusicApi> => {
    const response = await fetch(args)
    return (await response.json()) as AppleMusicApi
}