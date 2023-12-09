import React, {useEffect} from "react"
import { Goerli, useEthers, usedEthers} from '@usedapp/core';

import './index.css';
import styles from './styles';
import { uniswapLogo } from './assets';

import {Exchange, Loader, WalletButton} from './components';
import {usePools} from './hooks';

const App = () => {
  const { account } = useEthers();
  const [loading, pools] = usePools();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  console.log(pools);
  console.log(account);
  console.log(loading);



  return(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img 
            src={uniswapLogo} 
            alt="logo" 
            className="w-18 h-20 object-contain"
          />
          <WalletButton />
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>ChainDEX</h1>
          <p className={styles.subTitle}>Exchange tokens in seconds</p>
  
          <div className={styles.exchangeBoxWrapper}
          >
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
              {account ? (
                  loading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;