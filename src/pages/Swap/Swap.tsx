import { Button, InputAdornment, TextField } from "@material-ui/core"
import { SwapVerticalCircle } from "@material-ui/icons"
import React, { useEffect } from "react";
import { ChangeEvent } from "react";
import { GRAY_ADDRESS } from "../../constants/addresses";
import { getEthToTokenOutputAmount, calculateSlippage } from "../../functions/swap";
import { fromWei, toWei, onEthToTokenSwap } from "../../utils/ethers";

export function Swap(props: any) {
    const [inputValue, setInputValue] = React.useState('');
    const [outputValue, setOutputValue] = React.useState('');

    const slippage = 200;

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setInputValue(event.target.value);
    }

    async function onSwap() {
        onEthToTokenSwap(toWei(inputValue), toWei(outputValue), GRAY_ADDRESS, props.network);
    }

    async function getOutputAmount() {
        // console.log('getoutputamount networkid:', props.network)
        const output = await getEthToTokenOutputAmount(inputValue, GRAY_ADDRESS, props.network);
        const outputWithSlippage = calculateSlippage(slippage, output).minimum;
        setOutputValue(fromWei(outputWithSlippage));
    }

    useEffect(() => {
        getOutputAmount();
    }, [inputValue])

    return (
        <div>
            Swap
            <div>
                <TextField
                    value={inputValue}
                    onChange={handleInput}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">ETH</InputAdornment>,
                    }} />
            </div>
            <SwapVerticalCircle />
            <div>
                <TextField
                    value={outputValue}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">GRAY</InputAdornment>,
                    }} />
            </div>
            <Button color="primary" variant="contained" onClick={onSwap}>Swap</Button>
        </div >
    )
}