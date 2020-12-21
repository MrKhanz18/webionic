import { IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonPage, IonRow, IonToolbar } from '@ionic/react'
import { logoFacebook, logoGoogle, logoInstagram, logoLinkedin, logoWhatsapp } from 'ionicons/icons'
import React from 'react'
import './Blogs.css'

const Blogs: React.FC = () => {
    return (
        <IonPage>
            <IonContent>

                 {/*navbar*/}
                <IonHeader>
                <IonToolbar>
                </IonToolbar>
                </IonHeader>

                <IonCard id='blogcard1'>
                    <IonCardContent>
                        <h1>Check out our</h1>
                        <h1 className='display-1'>BLOG</h1>
                    </IonCardContent>
                </IonCard>

                <IonCard id='blogscard2'>
                    <IonCardTitle class='text-center'>
                     Multiple section algorithm
                    </IonCardTitle>
                    <IonCardContent>
                        <p>WODO is pre-programmed with Multiple Section Algorithm which analyses your skills and knowledge and provide you work accordingly.You won't have to worry about your budget.Here we provide customers with satisfaction in, whatever budget they have.Customers can hire skilled workers according to their requirements in favourable budget</p>
                    </IonCardContent>
                </IonCard>
            
                <IonCard id='blogscard3'>
                    <IonCardTitle class='text-center'>
                     Multiple section algorithm
                    </IonCardTitle>
                    <IonCardContent>
                        <p>WODO is pre-programmed with Multiple Section Algorithm which analyses your skills and knowledge and provide you work accordingly.You won't have to worry about your budget.Here we provide customers with satisfaction in, whatever budget they have.Customers can hire skilled workers according to their requirements in favourable budget</p>
                    </IonCardContent>
                </IonCard>

               {/* footer */}
               <IonFooter id="foots">
                <IonRow class="justify-content-center bg-warning">
                    <IonCol size="4" class='d-flex justify-content-center'>
                    <small id="text-light text-center">Join us</small>
                    </IonCol>
                    <IonCol size="4" class='d-flex justify-content-center'>
                    <small id="text-light text-center">Work with us</small>
                    </IonCol>
                    <IonCol size="4" class='d-flex justify-content-center'>
                    <small id="text-light text-center">Link</small>
                    </IonCol>
                </IonRow>

                <IonRow class="justify-content-center">
                    <IonCol size="4" class="d-flex justify-content-center">
                    <small id="fh6">We have made a simple but<br/>powerful step with</small>
                    </IonCol>
                    <IonCol size="4" class="d-flex justify-content-center">
                    <small id="fh6">We have made a simple but<br/>powerful step with</small>
                    
                    </IonCol> 
                    <IonCol size="4" class="d-flex justify-content-center">
                    <small id="fh6">We have made a simple but<br/>powerful step with</small>
                    </IonCol>
                </IonRow>

                <IonRow class="justify-content-center">
                    <IonCol size="4"class="d-flex justify-content-center">
                    <small id="fh6">We have made a simple but<br/>powerful step with</small>
                    </IonCol>
                    <IonCol size="4" class="d-flex justify-content-center">
                    <small id="fh6">We have made a simple but<br/>powerful step with</small>
                    
                    </IonCol> 
                    <IonCol size="4" class="d-flex justify-content-center">
                    <small id="fh6">We have made a simple but<br/>powerful step with</small>
                    </IonCol>
                </IonRow>

                <IonRow class="justify-content-center">
                    <IonCol size="4" class="d-flex justify-content-center">
                    <small id="fh6">We have made a simple but<br/>powerful step with</small>
                    </IonCol>
                    <IonCol size="4" class="d-flex justify-content-center">
                    <small id="fh6">We have made a simple but<br/>powerful step with</small>
                    
                    </IonCol> 
                    <IonCol size="4" class="d-flex justify-content-center">
                    <small id='fh6'>We have made a simple but<br/>powerful step with</small>
                    </IonCol>
                </IonRow>

                <IonRow class="justify-content-center">
                    <IonCol size='1'> 
                    <IonIcon icon={logoFacebook} color='primary'/>
                    </IonCol>
                    <IonCol size='1'> 
                    <IonIcon icon={logoGoogle} color='danger'/>
                    </IonCol>
                    <IonCol size='1'> 
                    <IonIcon icon={logoWhatsapp} color='success'/>
                    </IonCol>
                    <IonCol size='1'> 
                    <IonIcon icon={logoInstagram} color='primary'/>
                    </IonCol>
                    <IonCol size='1'> 
                    <IonIcon icon={logoLinkedin} color='primary'/>
                    </IonCol>
                </IonRow>
                
                <IonRow class="justify-content-center mt-3">
                    <small>Joins us on social networking sites.</small>
                </IonRow>
            </IonFooter>


            </IonContent>
        </IonPage>
    )
}

export default Blogs
