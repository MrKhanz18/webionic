import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonRadio, IonRow, IonToolbar } from '@ionic/react';
import React from 'react'
import './Aboutus.css'

const Aboutus: React.FC = () =>{


return(
    <IonPage>
        <IonContent>

             {/*navbar*/}
            <IonHeader>
            <IonToolbar>
            </IonToolbar>
            </IonHeader>

            <IonCard id='aboutcard1'>
                <IonCardContent>
                    <h2 className='text-white'>ABOUT THE APP</h2>
                    <h5 className='text-white'>Hire workers at your fingertips</h5>
                    
                    <IonRow>
                        <IonCol size='3'>
                             <button id='aboutbtn' className='btn btn-outline-light'>Download</button>
                        </IonCol>
                        <IonCol>
                             <button id='aboutbtn' className='btn btn-outline-light'>Learn More</button>
                        </IonCol>
                    </IonRow>
                </IonCardContent>
            </IonCard>
        
            <IonCard id='aboutcard2'>
                <IonCardTitle class='text-dark'>1. Hyperlocal category app</IonCardTitle> 
                <IonCardContent>
                    <p>Wodo ia your one stop solution for multiple level working and hiring problems.We, at WODO, will help you find workers and work at your local level in pocket friendly budget. At hyperlocal level, we gurantee you work and workers. No need to go other than your local places for work. Find work and workers at your fingertips with WODO.</p>
                    <IonRow class='mt-2 justify-content-center'>
                        <IonCol>
                            <IonImg src={require('../images/aboutus/1.1.png')} alt='1.1'/>
                        </IonCol>
                    </IonRow>
                    <IonRow class='mt-2 justify-content-center'>
                        <IonCol>
                            <IonImg src={require('../images/aboutus/1.2.png')} alt='1.2'/>
                        </IonCol>
                    </IonRow>
                    <IonRow class='mt-2 justify-content-center'>
                        <IonCol class='d-flex justify-content-center'>
                            <IonImg src={require('../images/aboutus/1.3.png')} alt='1.3'/>
                        </IonCol>
                    </IonRow>
                </IonCardContent>
            </IonCard>

            <IonCard id='aboutcard3'>
                <IonCardTitle>2. Multiple section algorithm</IonCardTitle>
                <IonCardContent>
                    <p>WODO is pre-programmed with Multiple Section Algorithm which analyses your skills and knowledge and provide you work accordingly.You won't have to worry about your budget.Here we provide customers with satisfaction in, whatever budget they have.Customers can hire skilled workers according to their requirements in favourable budget</p>
                </IonCardContent>
            </IonCard>

            <IonCard id='aboutcard4'>
                <IonCardTitle class='text-dark'>3. Features</IonCardTitle>
                <IonCardContent>
                    <p>WODO is the easiest way for customers to search and hire workers at fingertips. WODO is packed with Customer-friendly features.
                    Customers, if hired workers earlier, can save the workers details to help them get referred in future.We have made it easy for our customers, so that they need not worry about future recruitments.


                    We have made it even simpler for customers by taking a step further.The history of the workers previously hired get saved and Customers can decide whether to hire the corresponding workers or not by viewing their history.


                    We have also got you covered regarding communication between customers and workers.WODO has a feature packed wallet which can be recharge to communicate via calls with workers.Calls can be made through the app only.</p>

                    <IonRow class='justify-content-center'>
                        <IonImg src={require('../images/aboutus/3.1.png')} alt='3.1'/>
                    </IonRow>
                    <IonRow class='justify-content-center'>
                        <IonImg src={require('../images/aboutus/3.2.png')} alt='3.2'/>
                    </IonRow>
                    <IonRow class='justify-content-center'>
                        <IonImg src={require('../images/aboutus/3.3.png')} alt='3.3'/>
                    </IonRow>

                </IonCardContent>
            </IonCard>

            <IonCard id='aboutcard5'>
                <IonCardTitle class='text-light'>4. Call rates</IonCardTitle>
                <IonCardContent>
                    <p>While we are providing you with wallet, we also
                    provide a budget friendly call services at a
                    minimal call rates.Call ratres will be
                    as follows Rs.2 for the initial minutes and
                    Rs. 0.5 for subsequent minutes</p>
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
 )
}

export default Aboutus;