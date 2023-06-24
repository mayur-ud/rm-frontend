import React, {  useContext, useState } from 'react';
import { Evidence } from '../interface/Evidence';
import { Evidences } from '../interface/Evidences';
import { EvidenceStoreProviderProps } from '../interface/EvidenceStoreProviderProps';
import { useDisclosure } from '@mantine/hooks';


const MyContext = React.createContext<any>(null);

const MyProvider: React.FC<EvidenceStoreProviderProps> = ({ children } : EvidenceStoreProviderProps) => {
  
    const [evidences , setEvidences] = useState<Evidences>({
        FR2: [],
        FR3: [],
        FR4: [],
        FR5: [],
    })

    const [opened2, { open : open2, close : close2 }] = useDisclosure(false)
    const [opened3, { open : open3, close : close3 }] = useDisclosure(false)
    const [opened4, { open : open4, close: close4 }] = useDisclosure(false)
    const [opened5, { open : open5, close: close5 }] = useDisclosure(false)

    const modalState = {
        FR2 : [opened2 , {open2,close2}],
        FR3 : [opened3 , {open3,close3}],
        FR4 : [opened4 , {open4,close4}],
        FR5 : [opened5 , {open5,close5}]
    }


    const getModalState = (frNo : Number)=>{
        console.log(frNo , [ modalState.FR2[0] , {open : open2 , close : close2}] , 'GMS')
        if(frNo === 2) return [ modalState.FR2[0] , {open : open2 , close : close2}]
        else if (frNo === 3) return [ modalState.FR3[0] , {open : open3 , close : close3}]
        else if (frNo === 4) return [ modalState.FR4[0] , {open : open4 , close : close4}]
        else if (frNo === 5) return [ modalState.FR5[0] , {open : open5 , close : close5}]
    }

  const addEvidence = (frNo : Number , newEvidence : Evidence) =>{
    console.log(frNo ,'frno', newEvidence)
    if (frNo === 2){
        setEvidences(prevState => ({
            ...prevState,
            FR2: [...prevState.FR2, newEvidence],
          }));
    }
    else if (frNo === 3){
        setEvidences(prevState => ({
            ...prevState,
            FR3: [...prevState.FR3, newEvidence],
          }));
    }

    return true

  }

  const getEvidence = (frNo : Number)=>{
    console.log(evidences , 'GET')
    if(frNo === 2) return evidences.FR2
    else if (frNo === 3) return evidences.FR3
    else if (frNo === 4) return evidences.FR4
    else if (frNo === 5) return evidences.FR5
  }

  const value = {
    evidences,
    addEvidence,
    getModalState,
    getEvidence
  };

  return (
    
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

const useEvidenceContext = () => useContext(MyContext);

export { MyProvider, useEvidenceContext };
