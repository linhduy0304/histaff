

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
import CBNV_QHNT from './screens/CBNV/CBNV_QHNT';
import CBNV_QTCTTD from './screens/CBNV/CBNV_QTCTTD';
import CBNV_QTCTHT from './screens/CBNV/CBNV_QTCTHT';
import CBNV_QTDTTCT from './screens/CBNV/CBNV_QTDTTCT';
import CBNV_QTDTNCT from './screens/CBNV/CBNV_QTDTNCT';
import CBNV_QTHDLD from './screens/CBNV/CBNV_QTHDLD';
import CBNV_QTTDLPC from './screens/CBNV/CBNV_QTTDLPC';
import CBNV_QTKT from './screens/CBNV/CBNV_QTKT';
import CBNV_QTKL from './screens/CBNV/CBNV_QTKL';
import CBNV_QTDG from './screens/CBNV/CBNV_QTDG';
import CBNV_QTNL from './screens/CBNV/CBNV_QTNL';

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
			<Scene key="cbnv_qhnt" component={CBNV_QHNT}/>
			<Scene key="cbnv_qtcttd" component={CBNV_QTCTTD}/>
			<Scene key="cbnv_qtctht" component={CBNV_QTCTHT}/>
			<Scene key="cbnv_qtdttct" component={CBNV_QTDTTCT}/>
			<Scene key="cbnv_qtdtnct" component={CBNV_QTDTNCT}/>
			<Scene key="cbnv_qthdld" component={CBNV_QTHDLD}/>
			<Scene key="cbnv_qttdlpc" component={CBNV_QTTDLPC}/>
			<Scene key="cbnv_qtkt" component={CBNV_QTKT}/>
			<Scene key="cbnv_qtkl" component={CBNV_QTKL}/>
			<Scene key="cbnv_qtdg" component={CBNV_QTDG}/>
			<Scene key="cbnv_qtnl" component={CBNV_QTNL}/>

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