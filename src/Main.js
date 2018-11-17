

import React from 'react';
import { Scene, Router, Stack} from 'react-native-router-flux';

import reducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk)) 

import App from './screens/App';
import Login from './screens/Login';
import Home from './screens/Home';
import HSNS from './screens/TTCN/HSNS';
import QHNT from './screens/TTCN/QHNT';
import QTCTTD from './screens/TTCN/QTCTTD';
import QTCTHT from './screens/TTCN/QTCTHT';
import QTDTTCT from './screens/TTCN/QTDTTCT';
import QTDTNCT from './screens/TTCN/QTDTNCT';
import QTHDLD from './screens/TTCN/QTHDLD';
import QTTDLPC from './screens/TTCN/QTTDLPC';
import QTKT from './screens/TTCN/QTKT';
import QTKL from './screens/TTCN/QTKL';
import QTDG from './screens/TTCN/QTDG';
import QTNL from './screens/TTCN/QTNL';

import CBNV_HSNS from './screens/CBNV/CBNV_HSNS';

import BC from './screens/BC';
import PL from './screens/PL';
import TDG from './screens/DG/TDG';
import KPICN from './screens/DG/KPICN';
import KPINV from './screens/DG/KPINV';
import DKN from './screens/LOT/DKN';
import DKLT from './screens/LOT/DKLT';
import DKDMVS from './screens/LOT/DKDMVS';
import PDN from './screens/LOT/PDN';
import PDLT from './screens/LOT/PDLT';
import PDDMVS from './screens/LOT/PDDMVS';

const Main = () => (
  <Provider store = {store}>
    <Router>
		<Stack key="root" hideNavBar={true}>
			<Scene key="app" component={App}/>
			<Scene key="login" component={Login}/>
			<Scene key="home" component={Home}/>

			<Scene key="hsns" component={HSNS}/>
			<Scene key="qhnt" component={QHNT}/>
			<Scene key="qtcttd" component={QTCTTD}/>
			<Scene key="qtctht" component={QTCTHT}/>
			<Scene key="qtdttct" component={QTDTTCT}/>
			<Scene key="qtdtnct" component={QTDTNCT}/>
			<Scene key="qthdld" component={QTHDLD}/>
			<Scene key="qttdlpc" component={QTTDLPC}/>
			<Scene key="qtkt" component={QTKT}/>
			<Scene key="qtkl" component={QTKL}/>
			<Scene key="qtdg" component={QTDG}/>
			<Scene key="qtnl" component={QTNL}/>

			<Scene key="cbnv_hsns" component={CBNV_HSNS}/>
			{/* <Scene key="qhnt" component={CBNV-QHNT}/>
			<Scene key="qtcttd" component={CBNV-QTCTTD}/>
			<Scene key="qtctht" component={CBNV-QTCTHT}/>
			<Scene key="qtdttct" component={CBNV-QTDTTCT}/>
			<Scene key="qtdtnct" component={CBNV-QTDTNCT}/>
			<Scene key="qthdld" component={CBNV-QTHDLD}/>
			<Scene key="qttdlpc" component={CBNV-QTTDLPC}/>
			<Scene key="qtkt" component={CBNV-QTKT}/>
			<Scene key="qtkl" component={CBNV-QTKL}/>
			<Scene key="qtdg" component={CBNV-QTDG}/>
			<Scene key="qtnl" component={CBNV-QTNL}/> */}

			<Scene key="bc" component={BC}/>
			<Scene key="pl" component={PL}/>

			<Scene key="tdg" component={TDG}/>
			<Scene key="kpicn" component={KPICN}/>
			<Scene key="kpinv" component={KPINV}/>

			<Scene key="dkn" component={DKN}/>
			<Scene key="dklt" component={DKLT}/>
			<Scene key="dkdmvs" component={DKDMVS}/>
			<Scene key="pdn" component={PDN}/>
			<Scene key="pdlt" component={PDLT}/>
			<Scene key="pddmvs" component={PDDMVS}/>
		</Stack>
    </Router>
  </Provider>
);
export default Main;