import Head from 'next/head'
import useAppleMusicSWR from '../lib/hooks/useAppleMusicSWR'

export default function Index() {
    const {mutate, data, error, isValidating, isLoading} = useAppleMusicSWR()

    return (
        <>
            <Head>
                <title>pageIndex</title>
            </Head>
            <h1>pageIndex</h1>
            <div>
            {
                data? data.map((props) => {
                    <p>{props}</p>
                })
                : 'loading....'
            }
            </div>
        </>
    )
}