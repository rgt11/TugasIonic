import { Redirect, Route } from 'react-router-dom';
import { IonAlert, IonApp, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRouterOutlet, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import BmiControls from './components/BmiControls';
import BmiResult from './components/BmiResult';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React, { useState, useRef } from 'react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import InputControl from './components/InputControl';

type optionValue = 'cmkg' | 'ftlbs';

const App: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>(0);
  const [ resultBmi, setResultBmi ] = useState<string>("");
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const [error, setError] = useState<string>();
  const [calcUnits, setUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;
    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredWeight <= 0 ||
      +enteredHeight <= 0
    ) {
      setError("Please enter a valid (non-negative) input number");
      return;
    }

    const bmi: number = +(+enteredWeight / ((+enteredHeight/100) * (+enteredHeight/100))).toFixed(3);

    console.log(bmi);
    console.log(categoryBMI(bmi));
    setCalculatedBMI(bmi);
    setResultBmi(categoryBMI(bmi));
  };
  const selectUnitsHandler = (selectedValue: optionValue) => {setUnits(selectedValue);
    if(selectedValue === 'ftlbs') {
      heightInputRef.current!.value = (heightInputRef.current!.value ?
        +heightInputRef.current!.value : 0) * 0.0328;
      weightInputRef.current!.value = (weightInputRef.current!.value ?
        +weightInputRef.current!.value : 0) * 2.2;
    }
    else if(selectedValue === 'cmkg'){
      heightInputRef.current!.value = (heightInputRef.current!.value ?
        +heightInputRef.current!.value : 0) / 0.0328;
      weightInputRef.current!.value = (weightInputRef.current!.value ?
        +weightInputRef.current!.value : 0) / 2.2;
    }
  }
  const categoryBMI = (bmi: number): string => {
    if(bmi < 18.5) return "Kurus"
    else if(bmi > 18.5 && bmi < 24.9) return "Normal"
    else if(bmi > 25 && bmi < 29.9) return "Gemuk"
    else return "Obesitas"
  }

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
  };
  const clearError = () => {
    setError('');
  };

  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearError }
        ]} />

      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <InputControl selectedValue={calcUnits} onSelectValue={selectUnitsHandler} />
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Tinggi Badan ({calcUnits === 'cmkg' ? 'cm' : 'feet'}) </IonLabel>
                  <IonInput type="number" ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Berat Badan ({calcUnits === 'cmkg' ? 'kg' : 'lbs'})</IonLabel>
                  <IonInput type="number" ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />
            <BmiResult calculatedBmi={calculatedBMI} resultBmi={resultBmi}/>
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  );
};

export default App;

