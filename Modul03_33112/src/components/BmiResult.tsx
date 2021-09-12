import React from 'react';
import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react'

const BmiResult: React.FC<{
  calculatedBmi: number,
  resultBmi: string
}> = props => {

  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h3>{props.calculatedBmi}</h3>
            <h2>{props.resultBmi}</h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;