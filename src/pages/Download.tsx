import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { logoAndroid, logoApple, logoAppleAppstore, logoGooglePlaystore } from 'ionicons/icons';
import React  from 'react';
import './Home.css'

const Download: React.FC = () => {

    return(
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar></IonToolbar>
                </IonHeader>
                <IonCard id='card1'>
                    <IonCardContent>
                    <IonRow>
                             <h1 id='homeh3'>Try out our<br/>awesome mobile<br/> application</h1>
                    </IonRow>
                    </IonCardContent>
                </IonCard>
                        <IonRow class='text-center'>
                            <IonCol>
                                <a id='dbtnid' href = "https://play.google.com/store" className='btn btn-outline-light '>Download For <IonIcon id='playicon' icon={logoGooglePlaystore}/></a>
                            </IonCol>
                        </IonRow>   
                        <IonRow class='text-center'>
                            <IonCol >
                                <a id='dbtnid' href ='https://www.apple.com/in/app-store/' className='btn btn-outline-light '>Download For <IonIcon id='appleicon' icon={logoAppleAppstore}/></a>
                            </IonCol>
                        </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Download;