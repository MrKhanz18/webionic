import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill'
import axios from 'axios';
import { IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import { text } from 'ionicons/icons';

const Test: React.FC = () => {
   const [content, setContent] = useState('');
   const [ data, setData ] = useState('')

    const hello = <h2 className='text-danger text-center display-1'>Hello</h2>

    useEffect(() => {
        axios.get("http://api.wodoworker.com/website/data",{
            headers:{
                page:"Blogpage",
                id:1
            }
        })
        .then(res => {
            console.log(res.data.data)
            console.log(typeof(res.data.data.meta.content))
            setData(res.data.data.meta.keyword);
            setContent(res.data.data.content)
            
        })
    }, [])
   
    return(
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>

                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonCardContent>
                       <div dangerouslySetInnerHTML={{ __html: content }} />
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Test;