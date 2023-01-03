// export const fetcher = async (args: string): Promise<AppleMusicApi> => {
//     const response = await fetch(args)
//     return (await response.json()) as AppleMusicApi
// }

export default async function fetcher(...args) {
    const res = await fetch(...args)
    return res.json()
}