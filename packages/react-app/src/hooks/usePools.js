import Web3 from 'web3';
import { useEffect, useState } from 'react';
import {useConfig} from '@usedapp/core';

import { ROUTER_ADDRESS } from '../config';
import { getFactoryInfo,getRouterInfo } from '../utils';

export const loadPools = async (providerUrl) => {
    try {
        console.log('loadPools is being called');
        const provider = new Web3.providers.HttpProvider(providerUrl);
        const web3 = new Web3(provider);

        console.log('Getting router info');
        const routerInfo= await getRouterInfo(ROUTER_ADDRESS, web3);
        console.log('Getting factory info');
        const factoryInfo= await getFactoryInfo(routerInfo.factory, web3);

        console.log('loadPools is returning', factoryInfo.pairsInfo);
        return factoryInfo.pairsInfo;
    } catch (error) {
        console.error('Error loading pools:', error);
      }

}

export const usePools = () => {
    const {readOnlyChainId, readOnlyUrls} = useConfig();
    const [loading, setLoading] = useState(true);
    const [pools, setPools] = useState({});


    useEffect(() => {
        loadPools(readOnlyUrls[readOnlyChainId])
            .then((pools) => {
                setPools(pools);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, [readOnlyChainId, readOnlyUrls])

    useEffect(() => {
        console.log('loading:', loading);
    }, [loading]);

    return [loading, pools];
}
