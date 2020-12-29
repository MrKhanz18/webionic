import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonRadio, IonRow, IonToolbar } from '@ionic/react';

const Partner: React.FC = () => {

const cid = '577951611418-e5t33mmgsa45uitqe31prr9nhtr9u5a2.apps.googleusercontent.com'    

const [partner, setPartner] = useState ({
        firstname:'',
        lastname:'',
        date:'',
        email:'',
        mobile:'',
        city:'',
        token:'',
        isLogined:false
    });

function login(response:any){
    if(response.accessToken){
        console.log(response.accessToken)
        setPartner({
            ...partner,
            isLogined:true,
            token: response.accessToken
        })
    }
}

const logout = (response:any) => {
    console.log(response)
    setPartner({
        ...partner, 
        isLogined:false,
        token:''
    })
}

function handleLoginFailure (response:any) {
    alert('Failed to log in')
  }

const  handleLogoutFailure = (response:any) => {
    alert('Failed to log out')
  }




    return(
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar></IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonCardHeader class='text-center'>
                        <h2>Work With Us</h2>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>By using WODO, you can solve your problems easily, but when you work with WODO, you can help others, and also you can make money.<br/>
                        We give you the privilege to add workers to this platform. And by doing so, you earn calling money.
                        </p><br/><br/>
                        
                        {/* <IonCard>
                            <IonCardHeader> */}
                                <h5>Just follow the mentioned steps :</h5>
                            {/* </IonCardHeader>
                            <IonCardContent> */}
                                <h6>1.Provide your details in the form below.<br/>
                                2.Download the wodo app.<br/>
                                3.Go to work with us section and add workers data.<br/>
                                4.Get the credit directly to your wodo wallet.<br/><br/>
                                Other than making money, you are helping a person in finding work.<br/><br/>
                                Terms and Conditions applied.
                                </h6>
                            {/* </IonCardContent>
                        </IonCard> */}
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader class='text-center'>
                        <h2>Fill The Form</h2>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonInput type="text" id='firstname' onIonChange=
                        {
                            (e:any) => setPartner({...partner, firstname:e.detail.value})
                        }
                        required={true}
                        placeholder='First Name' clearInput={true} 
                        />

                        <IonInput type="text" 
                        clearInput={true}
                        required={true}
                        id='lastname' onIonChange=
                        {
                            (e:any) => setPartner({...partner, lastname:e.detail.value})
                        } 
                        placeholder='Last Name'/>

                        <IonInput type="date" id="dob"
                        required={true}
                        clearInput={true}
                        onIonChange={
                            (e:any) => setPartner({...partner, date:e.detail.value})
                        } />

                        <IonInput type="email"
                        required={true}
                        clearInput={true} id='email' onIonChange={
                            (e:any) => setPartner({...partner, email:e.detail.value})
                        } placeholder='Email'/>

                        <IonInput type="text"
                        required={true}
                        clearInput={true} id='mobile' onIonChange={(e:any) => setPartner({...partner, mobile:e.detail.value})} placeholder='Mobile Number' maxlength={10} minlength={10}/>

                        <IonInput type="text"
                        required={true}
                        clearInput={true} id='city' onIonChange={(e:any) => setPartner({...partner, city:e.detail.value})} placeholder='City'/>

                        {partner.isLogined ? 
                        <GoogleLogout 
                        clientId={cid}
                        buttonText='Logout From Google'
                        onLogoutSuccess= {() => logout}
                        onFailure={() => handleLogoutFailure}
                        />   : 
                        <GoogleLogin 
                        clientId={cid}
                        buttonText='Login With Google'
                        onSuccess={login}
                        onFailure={handleLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        responseType='code,token'
                        />}
                         {
                         partner.isLogined ? 
                        <IonButton expand="block" fill="solid"type="submit" >Submit</IonButton>
                        : null
                        }
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Partner;