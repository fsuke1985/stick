import useSWR from 'swr'
import type { SWRResponse } from 'swr'
import { fetcher } from "../fetcher"

const useAppleMusicSWR = (
    fallbackData: AppleMusicApi
): SWRResponse<AppleMusicApi, any> => {
    return useSWR('/api/Apple', fetcher, { fallbackData })
}

export default useAppleMusicSWR