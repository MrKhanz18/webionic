import React from 'react';
import { IonApp, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, useLocation } from 'react-router-dom';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Blogs from './pages/Blogs';
import { briefcaseOutline, briefcaseSharp, bulbOutline, bulbSharp, cafeOutline, cafeSharp, cloudDoneOutline, cloudDoneSharp, cloudDownloadOutline, cloudDownloadSharp, homeOutline, homeSharp } from 'ionicons/icons';
import Menu from './components/Menu';
import WebApp from './pages/WebApp';
import Download from './pages/Download';
import Partner from './pages/Partner';
import Workwithus from './pages/Workwithus';
import Dispute from './pages/Dispute';
import Refund from './pages/Refund';
import Codeof from './pages/Codeof';
import Test from './pages/Test';
 
const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
      <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>WODO WORKER</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/home" component={Home} exact />
            <Route path="/page/aboutus" component={Aboutus} exact />
            <Route path="/page/blogs" component={Blogs} exact />
            <Route path="/page/webapp" component={WebApp} exact />
            <Route path="/page/download" component={Download} exact />
            <Route path="/page/partner" component={Partner} exact />
            <Route path="/page/terms" component={Workwithus} exact />
            <Route path="/page/dispute" component={Dispute} exact />
            <Route path="/page/refund" component={Refund} exact />
            <Route path="/page/coc" component={Codeof} exact />
            <Route path="/page/test" component={Test} exact />
            <Redirect from="/" to="/page/home" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
