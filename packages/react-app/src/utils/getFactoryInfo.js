import { abis } from "@my-app/contracts";
import { getPairsInfo } from "./getPairsInfo";


export const getFactoryInfo = async (factoryAddress, web3) => {
    const factory = new web3.eth.Contract(abis.factory, factoryAddress);
    const factoryInfo = {
        fee: await factory.methods.feeTo().call(),
        feeToSetter: await factory.methods.feeToSetter().call(),
        allPairsLength: await factory.methods.allPairsLength().call(),
        allPairs: [],
    }

    const allPairsPromises = Array.from({ length: factoryInfo.allPairsLength }, (_, i) => factory.methods.allPairs(i).call());
    factoryInfo.allPairs = await Promise.all(allPairsPromises);

    factoryInfo.pairsInfo = await getPairsInfo(factoryInfo.allPairs, web3);

    return factoryInfo;
}