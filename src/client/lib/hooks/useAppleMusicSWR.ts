import useSWR from 'swr'
import type { SWRResponse } from 'swr'
import fetcher from "../fetcher"

const useAppleMusicSWR = (
    fallbackData?: AppleMusicApi
): SWRResponse<AppleMusicApi, any> => {

    if (typeof fallbackData !== 'undefined') {
        return useSWR('/api/Apple', fetcher, { fallbackData })
    }

    return useSWR('/api/Apple', fetcher)
}

export default useAppleMusicSWR