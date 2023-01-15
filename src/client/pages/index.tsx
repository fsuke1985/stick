import Head from 'next/head'
import { 
    Container, Grid, Card, Col, Row, Text, 
    Button 
} from "@nextui-org/react";
import { isPropertySignature } from 'typescript';

type CardConteinerProps = {
    text: string;
}

const CardContainer = (props: CardConteinerProps) => {

    return (
        <Card>
            <Card.Body>
                <Row justify="center" align="center">
                    <Text h6 size={15}>
                        {props.text}
                    </Text>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default function Index({ indexprops }) {
    return (
        
        <Container 
            as="main"
            display="flex"
            direction="column"
            justify="center"
            alignItems="center"
            style={{ height: '100vh'}}
        >
            <Head>
                <title>stick  | PageIndex</title>
            </Head>

            <CardContainer text={indexprops.CommitID} />
        </Container>
    )
}

export async function getStaticProps() {

    const indexprops: IndexProps = {
        CommitID: "f887sdfkl"
    };

    return {
        props: {
            indexprops
        }
    }
}