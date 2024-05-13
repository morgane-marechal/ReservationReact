import * as React from 'react';
import {
    Step,
    StepIndicator,
    StepStatus,
    StepIcon,
    StepNumber,
    StepSeparator,
    StepTitle,
    StepDescription,
    Stepper,
    useSteps,
} from '@chakra-ui/react';
import CalendarPage from './CalendarPage.jsx';
import TimeContainer from './TimeContainer.jsx';
import ListeReservations from './fetchReservations.jsx';
import FormReservation from './FormReservation.jsx';
import AlertDispo from './AlertDispo.jsx';
import GuestsSelection from './GuestsSelection.jsx';

function StepperComponent() {
    const steps = [
        { title: 'Choisir un jour' },
        { title: 'Choisir une heure' },
        { title: 'Nombre de personnes' },
        { title: 'Finalisation' },
    ];

    const { activeStep, goToNext, goToPrevious } = useSteps({
        initialStep: 0,
        steps: steps.length,
    });

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            goToNext(); 
        } else {
            console.log('fini');
        }
    };

    return (
        <Stepper index={activeStep} orientation='horizontale' >
            {steps.map((step, index) => (
                <div className='stepper-container'>
                    <Step key={index} >
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <StepTitle>{step.title}</StepTitle>
                        <StepSeparator />
                    </Step>
                </div>
            ))}

            <div className='stepper-container-content'>
                {activeStep === 0 && (
                    <CalendarPage />
                )}
                {activeStep === 1 && (
                    <TimeContainer />
                )}
                {activeStep === 2 && (
                    <>
                        <GuestsSelection />
                        <ListeReservations />
                    </>
                )}
                {activeStep === 3 && (
                    <>
                        <FormReservation />
                        <AlertDispo />
                    </>
                )}
                <button onClick={goToPrevious}>Précédent</button>
                <button onClick={handleNext}>Suivant</button>
            </div>
        </Stepper>
    );
}

export default StepperComponent;
