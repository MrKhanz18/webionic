import React from 'react';
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from '@ionic/react';
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
 
const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/home" component={Home} exact />
            <Route path="/page/aboutus" component={Aboutus} exact />
            <Route path="/page/blogs" component={Blogs} exact />
            <Redirect from="/" to="/page/home" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
