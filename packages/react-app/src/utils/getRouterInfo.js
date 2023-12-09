import {abis} from '@my-app/contracts';



export const getRouterInfo = async (routerAddress, web3) => {
    try {
        const router = new web3.eth.Contract(abis.router02, routerAddress);
        const factory = await router.methods.factory().call();
        return { factory };
    } catch (error) {
        console.error('Error getting router info:', error);
        throw error;
    }
}