import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import { logoFacebook, logoGoogle, logoInstagram, logoLinkedin, logoWhatsapp } from 'ionicons/icons';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  const slideOpts = {
    initialSlide: 1,  
    speed: 10
  };

  return (
  <IonPage>
    <IonContent>

        {/* top phone */}
        <IonCard id='card1'>
          <IonCardContent>
            <IonRow>
            <h1 id='homeh3'>Try out our<br/>awesome mobile<br/> application</h1>
            </IonRow>
            <IonRow>
            <button id='homebutton' className='btn  btn-sm btn-outline-light'>DOWNLOAD</button>
            </IonRow>
            <IonImg id='homephone' src={require('../images/home/phone.png')} alt='mobile'/>
          </IonCardContent>
        </IonCard>
      
          {/* to-do cards */}
          <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <IonRow>
              <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            </IonRow>
            </IonSlide>
            <IonSlide>
              <IonRow>
              <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            </IonRow>
            </IonSlide>
            <IonSlide>
              <IonRow>
              <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            </IonRow>
            </IonSlide>
        
          </IonSlides>

        {/* stats */}
            <IonCard>
              <IonImg id='statimg' src={require("../images/home/stats.png")} alt='stats'/>
          </IonCard>

        {/* to-do cards */}
        <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <IonRow>
              <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            </IonRow>
            </IonSlide>
            <IonSlide>
              <IonRow>
              <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            </IonRow>
            </IonSlide>
            <IonSlide>
              <IonRow>
              <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
              <IonCardHeader>
                  Shivanshu Dubey
              </IonCardHeader>
            </IonCard>
            </IonCol>
            </IonRow>
            </IonSlide>
        
          </IonSlides>
        
        {/* imp workers */}
          <IonCard>
            <IonImg src={require('../images/home/imp for worker.png')} alt="impworkers"/>
          </IonCard>

        {/* footerr */}
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

    );
}

export default Home;