import { Button, FormLabel, Input, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { DemoFilter } from "chakra-ui-demo";

export const DemoFilterPage = (props: any) => {

    const [from, setFrom] = useState<number | null>(100);
    const [to, setTo] = useState<number | null>(20);

    const [variant, setVariant] = useState<'smooth' | 'rounded'>('smooth');

    const { toggleColorMode } = useColorMode();

    const toggleVariant = () => {
        const newVariant = variant === 'smooth' ? 'rounded' : 'smooth';
        setVariant(newVariant);
    }

    const onFilterChange = (from: number | null, to: number | null) => {
        setFrom(from);
        setTo(to);
    }

    return (
        <>
            <Button id='pero' variant="primary" onClick={toggleColorMode}>Toogle Color</Button>
            <Button variant="primary" onClick={toggleVariant}>Toogle DemoFilter variant</Button>
            <DemoFilter value={{to, from}} onChange={onFilterChange} variant={variant} showTestProps={true}></DemoFilter>
            <pre>{`${from}_${to}`}</pre>
        </>
    )
}