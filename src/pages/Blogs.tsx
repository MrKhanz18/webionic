import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonModal, IonPage, IonRow, IonSpinner, IonToolbar } from '@ionic/react'
import { closeCircleSharp, logoFacebook, logoGoogle, logoInstagram, logoLinkedin, logoWhatsapp } from 'ionicons/icons'
import './Blogs.css'

const Blogs: React.FC = () => {
    
    // variable;
    const [ obj, setObj] = useState({
        id:{},
    });
    const [ Blogs, setBlogs ] = useState<any[]>([])
    const [ blogTemp, setBlogTemp ] = useState<any[]>([])
    const [ showModal, setShowModal ] = useState(false);

    // functions
    async function showArticle(bid:any)
    {
       alert('loading ....')
    }

    useEffect(()=>{
        axios.get("https://api.wodoworker.com/website/data",{
            headers:{
             page:"Blog"   
            }
        })
        .then(res => { 
            console.log(res.data.data)
            setBlogs(res.data.data);
        })
    },[])

    return (
        <IonPage>
            <IonContent>

                 {/*navbar*/}
                <IonHeader>
                <IonToolbar>
                </IonToolbar>
                </IonHeader>
                
                {/* Blogs Top */}

                <IonCard id='blogcard1'>
                    <IonCardContent>
                        <h1>Check out our</h1>
                        <h1 className='display-1'>BLOG</h1>
                    </IonCardContent>
                </IonCard>

                {/* Blogs Cards  */}
                {Blogs.length > 1 ?
                Blogs.map(bl => 
                    <IonCard id='blogscard2' key={bl.id} onClick={() => showArticle(bl.id)}>
                        <IonCardHeader>
                            <h6 className='text-center text-light'>{bl.title}</h6>
                        </IonCardHeader>
                        <IonCardContent>
                            <p className='text-center text-light'>{bl.meta.keyword}</p>
                        </IonCardContent>
                    </IonCard>
                    ):
                    <IonContent className='text-center'>
                        <IonSpinner name="dots" color='primary'/>
                    </IonContent>}
               

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

               {/*-----------------------------------*/}
               {
                  blogTemp.map(b => 
                    <IonLabel>
                        {b}
                    </IonLabel>)
               }
               

            </IonContent>
        </IonPage>
    )
}

export default Blogs
