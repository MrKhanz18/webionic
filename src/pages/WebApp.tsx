import React, { useEffect } from 'react';
import { InAppBrowser } from '@ionic-native/in-app-browser'
import { IonContent, IonPage, IonSpinner } from '@ionic/react';
const WebApp: React.FC = () =>{


useEffect(() => 
{  
    const browser = InAppBrowser.create("https://web.wodoworker.com/login", "_self", "location=no")        
}, []
)

    return(
        <IonPage>
            <IonContent>
                <IonSpinner color='primary' name='dots'/>
            </IonContent>
        </IonPage>
    )
}

export default WebApp;