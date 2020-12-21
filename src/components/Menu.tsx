import {
    IonContent,
  IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonToolbar,
  } from '@ionic/react';
  
  import React from 'react';
  import { useLocation } from 'react-router-dom';
  import { archiveOutline, archiveSharp, bookmarkOutline, homeOutline, cloudDownloadOutline, cloudDownloadSharp, cafeOutline, cafeSharp, cloudDoneOutline, cloudCircleOutline, homeSharp, bulbOutline, bulbSharp,briefcaseOutline, briefcaseSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, cloudDoneSharp } from 'ionicons/icons';
  import './Menu.css';
  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    {
      title: 'Home',
      url: '/page/home',
      iosIcon: homeOutline,
      mdIcon: homeSharp
    },
    {
      title: 'About',
      url: '/page/aboutus',
      iosIcon: bulbOutline,
      mdIcon: bulbSharp
    },
    {
      title: 'Blogs',
      url: '/page/blogs',
      iosIcon: briefcaseOutline,
      mdIcon: briefcaseSharp
    },
    {
      title: 'Partnership',
      url: '/page/Partner',
      iosIcon: cafeOutline,
      mdIcon: cafeSharp
    },
    {
      title: 'WebApp',
      url: '/page/WebApp',
      iosIcon: cloudDoneOutline,
      mdIcon: cloudDoneSharp
    },
    {
      title: 'Download',
      url: '/page/Download',
      iosIcon: cloudDownloadOutline,
      mdIcon: cloudDownloadSharp
    }
  ];
  
  const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          
          <IonList class='mt-5' id="inbox-list">
            <IonListHeader>Wodo Workers</IonListHeader>
            <IonNote>Equation to serve you</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
  
          {/* <IonList id="labels-list">
            <IonListHeader>Labels</IonListHeader>
            {labels.map((label, index) => (
              <IonItem lines="none" key={index}>
                <IonIcon slot="start" icon={bookmarkOutline} />
                <IonLabel>{label}</IonLabel>
              </IonItem>
            ))}
          </IonList> */}
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
  