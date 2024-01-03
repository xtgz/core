# core_cors_script
##### step 0
https://nodejs.cn/download/ or https://nodejs.org/en
Download, install, and execute the command; if the correct version is displayed, the installation is successful.
node -v
npm -v

##### step 1
npm install web3

##### step 2
node cors.js

----------------------------------------------

##### The first step is to install the nodejs environment. If you have it, skip it.
https://nodejs.cn/download/ or https://nodejs.org/en
It is best to choose the stable version if the version 16 is consistent with mine. If it is inconsistent, an error message will be reported for Web3. Replace const Web3 = require("web3"); with const { Web3 } = require("web3");

##### The second step is to install the web3 package
npm install web3

##### The third step is to configure the wallet you want to inscribe and the corresponding private key, and the rpc node configured by default in the code is a public node
Note that the places to change are:
Change the rpc node to the one you find yourself. Currently, it is a public core chain. One is paralyzed and the other is half paralyzed.
To configure your accounts address and private key
Also, if the rate is at line 82, how many transactions do you want to send at one time? If the rpc fails too much, it will be rejected.
If it is slow, you can add gas in line 87. Currently it is 2 times the gas and it is 60 GWEi.

##### the fourth step
Just open the console on this directory page and enter node cors.js
to run the script
