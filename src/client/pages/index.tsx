import Head from 'next/head'
import useAppleMusicSWR from '../lib/hooks/useAppleMusicSWR'
import Button from '@nextui-org/react/button';
import { Container, Grid, Card, Col, Row, Text } from "@nextui-org/react";
import { isPropertySignature } from 'typescript';

const BtnComponent = () => <Button>Click me</Button>

export default function Index() {
//    const {mutate, data, error, isValidating, isLoading} = useAppleMusicSWR()

    type CardConteinerProps = {
        text: string;
    }

    const CardContainer = (props: CardConteinerProps) => {

        return (
            <Card css={{ $$cardColor: '$colors$neutral' }}>
                <Card.Body>
                    <Row justify="center" align="center">
                        <Text h6 size={15} color="white" css={{ m: 0 }}>
                            {props.text}
                        </Text>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
    return (
        <>
            <Head>
                <title>pageIndex</title>
            </Head>
            <Grid.Container gap={2} justify="center">
                <Grid xs={4}>
                    <CardContainer text="1 of 3" />
                </Grid>
                <Grid xs={4}>
                    <CardContainer text="1 of 3" />
                </Grid>
                <Grid xs={4}>
                    <CardContainer text="1 of 3" />
                </Grid>
                <Grid xs={4}>
                    <CardContainer text="1 of 3" />
                </Grid>
                <Grid xs={4}>
                    <CardContainer text="1 of 3" />
                </Grid>
            </Grid.Container>
        </>
    )
}