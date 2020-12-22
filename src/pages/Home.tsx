import { IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRow, IonSlide, IonSlides, IonSpinner, IonToolbar,  } from '@ionic/react';
import { logoFacebook, logoGoogle, logoInstagram, logoLinkedin, logoWhatsapp } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  const [customer, setCustomer] = useState<any[]>([]);
  const [worker, setWorker] = useState<any[]>([]);
  
  const slideOpts = {
    initialSlide: 1,  
    speed: 10,
  };

  const onSpin = () => (
    <IonContent class="text-center">
      <IonSpinner name='circles' color='primary' />
    </IonContent>
  ) 

  useEffect(() => {
    axios.get("http://api.wodoworker.com/website/data",{
      headers:{
        page:"Home",
      }
    })
    .then(res => {
        console.log(res.data.data);
        // console.log(res.data.data.customer);
        setCustomer(res.data.data.customer)
        // console.log(res.data.data.worker);
        setWorker(res.data.data.worker)
    })
    console.log("hello");
    
  }, []);

  return (
  <IonPage>
    <IonContent>
        
        {/*navbar*/}
        <IonHeader>
          <IonToolbar>
          </IonToolbar>
        </IonHeader>
        {/* top phone */}
        <IonCard id='card1'>
          <IonCardContent>
            <IonRow>
            <h1 id='homeh3'>Try out our<br/>awesome mobile<br/> application</h1>
            </IonRow>
            <IonRow>
            <button id='homebutton' className='btn  btn-sm btn-outline-light' onClick={()=>alert('Downloading')}>DOWNLOAD</button>
            </IonRow>
          </IonCardContent>
        </IonCard>
      
          {/* to-do cards */}
          {customer.length > 1 ?
           <IonSlides pager={true} options={slideOpts}>
            
            {customer.map(cust =>  
            <IonSlide key={cust.id} id='slide'>
               <IonRow>
               <IonCol>
             <IonCard id='slide'>
               <IonCardHeader id='same'>
                 <IonLabel>Name - {cust.name}</IonLabel>
               </IonCardHeader>
               <IonCardContent id='same'>
                 <IonLabel>Rating - {cust.rating}</IonLabel><br/>
                 <IonLabel>Review - {cust.review}</IonLabel>
               </IonCardContent>
             </IonCard>
             </IonCol>
             </IonRow>
             </IonSlide>)}        
         
           </IonSlides> : 
           onSpin()}

        {/* stats */}
            <IonCard>
              <IonImg id='statimg' src={require("../images/home/stats.png")} alt='stats'/>
          </IonCard>

        {/* to-do cards */}
        {worker.length > 1 ?
        <IonSlides pager={true} options={slideOpts}>
            
        {worker.map(work =>  
           <IonSlide key={work.id}>
              <IonRow>
              <IonCol>
            <IonCard>
              <IonCardHeader id='same'>
                <IonLabel>Name - {work.name}</IonLabel>
              </IonCardHeader>
              <IonCardContent id='same'>
                <IonLabel>Skills - {work.skill}</IonLabel><br/>
                <IonLabel>Rating - {work.rating}</IonLabel><br/>
                <IonLabel>Review - {work.review}</IonLabel>
              </IonCardContent>
            </IonCard>
            </IonCol>
            </IonRow>
            </IonSlide>)} 
                  
        
          </IonSlides> :
          onSpin()

        }
        
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