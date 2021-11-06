import {useEffect, useContext} from 'react'
import { getFirestore } from 'firebase/firestore';
import {doc, onSnapshot} from 'firebase/firestore'
import app from '../../../Firebase/firebaseConfig'
import * as Headers from '../Context/contextObjects'

const db = getFirestore(app);

export const FetchHeaders = (props) => {
    const [, setStoreHours] = useContext(Headers.StoreHoursContext)

  useEffect(()=>{
        const getItems = ()=>{
            const unsubStoreHours = onSnapshot(doc(db, "headers", "hours"),
                    (doc) => {
                        setStoreHours(doc.data().header)
                    }
            );

           
       }
    
   getItems(db);
  },[])

    return (
        props.children
    )
}