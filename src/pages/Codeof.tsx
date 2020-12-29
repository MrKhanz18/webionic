import { IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import React from 'react'

function Codeof() {
    return (
        <IonPage>
            <IonContent>
                <IonHeader><IonToolbar></IonToolbar></IonHeader>
                <IonCard>
                    <IonCardHeader className='text-center text-danger'><h2>Code Of Conduct</h2></IonCardHeader>
                    <IonCardContent>
                        <p>1. Customers are bound to use basic etiquette and manners while talking to workers and vice versa.<br/> 
                        2. Customers are warned not to pay full fees before completion of work. Otherwise, WODO will not be responsible for any type of loss.<br/> 
                        3. Customers should avoid negotiations as the workers will be provided based on your budget.<br/> 
                        4. Customers should not force workers for doing overtime. You should not push the worker to do the work if he is not able to do so.</p><br/>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Codeof
