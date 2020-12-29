import { IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import React from 'react';

const Workwithus: React.FC = () => {

    return(
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar/>
                </IonHeader>

                <IonCard>
                    <IonCardHeader>
                        <h2 className='text-center text-danger'>WODO Terms and Conditions</h2><br/>
                        <p>
                        WODO provides a sophisticated platform that allows to search workers and work seekers to search for work. The following are terms and conditions for services provided by WODO. 
                        </p>
                    </IonCardHeader>
                    <IonCardContent>
                        <h2 className='text-center text-danger'>Terms and Conditions</h2><br/>
                        <p>1. WODO is a free platform. WODO won’t charge any commission for the services provided except for communication services.<br/>
                        2. Nor the workers will be asked of commission for getting work neither the customers will have to pay any commission for hiring workers.<br/>
                        3. WODO will not be responsible for any disputes among workers and customers.<br/>
                        4. Call charges will be as stated - ₹2 for connecting, initial minute and ₹0.5 for following minutes. 18% GST will be charged additionally. Customers will have to recharge their wallet for using call services.</p><br/><br/>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    )
}

export default Workwithus;