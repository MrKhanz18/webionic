import { IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import React from 'react'

const Dispute:React.FC = () => {
    return(
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>

                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonCardHeader><h2 className='text-center text-danger'>Dispute</h2></IonCardHeader>
                    <IonCardContent>
                    <p>WODO is just a communicator-cum-aggregator platform for workers and for those who are willing to hire workers. WODO does not make any warranties, claims or promises to the fitness or suitability of its programmes used by the customers or workers WODO will not liable for any kind of quality control or legal regulations regarding workplace, workers health and potential health vulnerabilities of workers. Customers have to choose workers according to their requirements. WODO will only be providing best search results based on requirements. </p>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    )
}

export default Dispute;