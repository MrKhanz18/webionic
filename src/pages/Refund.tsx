import { IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import React from 'react'

const Refund:React.FC = () => {
    return(
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>

                    </IonToolbar>
                </IonHeader>
                <IonCard>
                    <IonCardHeader><h2 className='text-center text-danger'>Refund</h2></IonCardHeader>
                    <IonCardContent>
                    <p>
                        WODO will be providing services free of cost. WODO will not ask for commission in any form either from customers or workers. WODO will charge for calling services only.
                    </p>
                </IonCardContent>
                </IonCard>
                
            </IonContent>
        </IonPage>
    )
}

export default Refund;