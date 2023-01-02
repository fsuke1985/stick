import Head from 'next/head'
import useAppleMusicSWR from '../lib/hooks/useAppleMusicSWR'

export default function Index() {
    const { data, error } = useAppleMusicSWR({X: "name"} as AppleMusicApi)

    return (
        <>
            <Head>
                <title>pageIndex</title>
            </Head>
            <h1>pageIndex</h1>
            { data.X }
        </>
    )
}