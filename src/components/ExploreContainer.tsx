import { IonBackdrop, IonCard, IonCardHeader, IonContent , IonRow, IonCol, IonCardContent, IonImg, IonSlides, IonSlide, IonHeader} from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonContent>
      Hello
    </IonContent>

  );
};

export default ExploreContainer;
