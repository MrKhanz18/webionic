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

        {/* 3 cards */}
        <IonSlides pager={true} options={slideOpts}>

          <IonSlide>      
            <IonCard>
              <IonCardHeader>
                <h2 className='text-success text-center'>What ?</h2>
              </IonCardHeader>
              <IonCardContent>
                <p>
                We have made a simple but powerful step with WODO towards bridging the gap between Recruiters and Employees. This is the first platform connecting workers with recruiters at Hyperlocal level. We, at WODO, are providing you with employees fitting your requirements while keeping your budget in account. You don’t need to search elsewhere, WODO is your one stop solution regarding hiring and working within your locality. You get the workers with skills, knowledge and experience perfect for your work. The most significant feature of WODO is that all the workers we will be providing will be from your geographical area i.e. your city and nearby area, so you don’t need to search elsewhere. 
                </p>
              </IonCardContent>
            </IonCard>
          </IonSlide>
      
          <IonSlide>
          <IonCard>
          <IonCardHeader>
            <h2 className='text-success text-center'>Why ?</h2>
          </IonCardHeader>
          <IonCardContent>
            <p>
            While you are recruiting at a local level, you require a middleman to hire a worker. And you have to pay for both of them.  Paying more money to the middleman than the worker is not even good for you and the worker. And work is not even up to the mark.<br/><br/>
            Just for removing these types of problems from your life, we are here. By using WODO, you can directly Contact the worker with the required skills under your budget and can remove the middleman, so you don't have to pay them.
            </p>
          </IonCardContent>
        </IonCard>

          </IonSlide>

          <IonSlide>
          <IonCard>
          <IonCardHeader>
            <h2 className='text-success text-center'>How ?</h2>
          </IonCardHeader>
          <IonCardContent>
            <p>
            We all are aware of the challenges faced by the skilled workforce, like, going door  to doors for work, hardly getting any work and after that, not getting the right value for the work. And most of the time employer makes a big sum of money from your work.<br/><br/>
            But by using WODO, first of all you are removing the middleman, and by that you will get the full amount of money which you should get for your skillset.
            </p>
          </IonCardContent>
        </IonCard>
          </IonSlide>

        </IonSlides>

        {/* stats */}
            <IonCard>
              <IonImg id='statimg' src={require("../images/home/stats.png")} alt='stats'/>
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

        
        {/* imp workers */}
          <IonCard>
            <IonImg src={require('../images/home/imp for worker.png')} alt="impworkers"/>
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
              

        {/* footerr */}
        <IonFooter id="foots">
          <IonRow class="justify-content-center bg-warning"> 
              <small id="text-light text-center">Join us</small>
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

          <IonRow class='justify-content-center bg-warning'>
              <small id="text-light text-center">Work with us</small>
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


          <IonRow class='justify-content-center bg-warning'>
              <small id="text-light text-center">Link</small>
          </IonRow>
          <IonRow class="justify-content-center">
                <IonCol size="3" class="d-flex justify-content-center">
                  <a href="/page/terms"><small id="fh6" >Terms and Conditions</small></a>
                </IonCol>
                <IonCol size="3" class="d-flex justify-content-center">
                <a href="/page/coc"><small id="fh6">Code Of Conduct</small></a>
                </IonCol> 
                <IonCol size="3" class="d-flex justify-content-center">
                <a href="/page/dispute"><small id='fh6'>Dispute</small></a>
                </IonCol>
                <IonCol size="3" class="d-flex justify-content-center">
                <a href="/page/refund"><small id='fh6'>Refund</small></a>
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