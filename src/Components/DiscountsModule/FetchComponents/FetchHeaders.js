import {useEffect, useContext} from 'react'
import { getFirestore } from 'firebase/firestore';
import {doc, onSnapshot} from 'firebase/firestore'
import app from '../../../Firebase/firebaseConfig'
import * as Headers from '../Context/contextObjects'

const db = getFirestore(app);

export const FetchHeaders = (props) => {
    const [, setStoreHours] = useContext(Headers.StoreHoursContext)
    const [, setStoreId] = useContext(Headers.StoreIdContext)
    const [, setStorePhone] = useContext(Headers.StorePhoneContext)
    const [, setStoreAddress] = useContext(Headers.StoreAddressContext)
    const [, setExchangePolicy] = useContext(Headers.StoreExchangePolicyContext)

  useEffect(()=>{
        const getItems = ()=>{
            const unsubStoreHours = onSnapshot(doc(db, "headers", "hours"),
                (doc) => {
                    setStoreHours(doc.data().header)
                }
            );
            
            const unsubStoreId = onSnapshot(doc(db, "headers", "id"),
                (doc) => {
                        setStoreId(doc.data().header)
                }
            );

            const unsubStoreAddress = onSnapshot(doc(db, "headers", "address"),
                (doc) => {
                        setStoreAddress(doc.data().header1 + "| " + doc.data().header2)
                }
            );

            const unsubStorePhone = onSnapshot(doc(db, "headers", "phone"),
                (doc) => {
                        setStorePhone(doc.data().header)
                }
            );

            const unsubExchangePolicy = onSnapshot(doc(db, "headers", "exchangepolicy"),
                (doc) => {
                        setExchangePolicy(
                            `${doc.data().header1}
                            ${doc.data().header2}`
                        )
                }
            );

           
       }
    
   getItems(db);
  },[])

    return (
        props.children
    )
}