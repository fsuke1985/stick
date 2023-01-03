import Head from 'next/head'
import useAppleMusicSWR from '../lib/hooks/useAppleMusicSWR'

export default function Index() {
    const {mutate, data, error, isValidating, isLoading} = useAppleMusicSWR()
console.log(data)
    return (
        <>
            <Head>
                <title>pageIndex</title>
            </Head>
            <h1>pageIndex</h1>
            <div>
                <p>
                {
                    isLoading? 'loading...' : data.X
                }
                </p>

            </div>
        </>
    )
}