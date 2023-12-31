import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xe74F5e0520eB201DBF0F5B22a933E54fc1790633"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/llhUGiucVoNhTw8wrZzJ4iyG1CNCVkhV",
  },
};