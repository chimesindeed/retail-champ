import {useEffect, useContext} from 'react'
import { getFirestore } from 'firebase/firestore';
import {doc, onSnapshot} from 'firebase/firestore'
import app from '../../../Firebase/firebaseConfig'
import * as Prices from '../Context/contextObjects'

const db = getFirestore(app);

export const FetchPrices = (props) => {
    const [, setSoftcoverPrice] = useContext(Prices.SoftcoverPriceContext)
    const [, setHardcoverPrice] = useContext(Prices.HardcoverPriceContext)
    const [, setChildrensPrice] = useContext(Prices.ChildrensPriceContext)
    const [, setAlbumsPrice] = useContext(Prices.AlbumsPriceContext)
    const [, setCdsPrice] = useContext(Prices.CdsPriceContext)
    const [, setDvdsPrice] = useContext(Prices.DvdsPriceContext)
    const [, setVhsPrice] = useContext(Prices.VHSPriceContext)
    const [, setSetsPrice] = useContext(Prices.SetsPriceContext)

  useEffect(()=>{
        const getItems = ()=>{
            const unsubSoftcover = onSnapshot(doc(db, "items", "softcover"),
                    (doc) => {
                        setSoftcoverPrice(doc.data().price)
                    }
            );

            const unsubHardcover = onSnapshot(doc(db, "items", "hardcover"),
                    (doc) => {
                        setHardcoverPrice(doc.data().price)
                    }
            );

            const unsubChildrens = onSnapshot(doc(db, "items", "childrens"),
                    (doc) => {
                        setChildrensPrice(doc.data().price)
                    }
            );

            const unsubAlbums = onSnapshot(doc(db, "items", "albums"),
                    (doc) => {
                        setAlbumsPrice(doc.data().price)
                    }
            );

            const unsubCds = onSnapshot(doc(db, "items", "cds"),
                    (doc) => {
                        setCdsPrice(doc.data().price)
                    }
            );

            const unsubDvds = onSnapshot(doc(db, "items", "dvds"),
                    (doc) => {
                        setDvdsPrice(doc.data().price)
                    }
            );

            const unsubSets = onSnapshot(doc(db, "items", "sets"),
                    (doc) => {
                        setSetsPrice(doc.data().price)
                    }
            );

            const unsubVhs = onSnapshot(doc(db, "items", "vhs"),
                    (doc) => {
                        setVhsPrice(doc.data().price)
                    }
            );
       }
    
   getItems(db);
  },[])

    return (
        props.children
    )
}