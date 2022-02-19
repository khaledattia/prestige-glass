import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from './Card';
import styles from './Transactions.module.css';
import { Loader } from '@components/Loader/Loader';
// import sha256  from "crypto-js/sha256";
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import hex from 'crypto-js/enc-hex';

// const mainKeys = {
//     "amount_cents": "",
//     "created_at": "",
//     "currency": "",
//     "error_occured": "",
//     "has_parent_transaction": "",
//     "id": "",
//     "integration_id": "",
//     "is_3d_secure": "",
//     "is_auth": "",
//     "is_capture": "",
//     "is_refunded": "",
//     "is_standalone_payment": "",
//     "is_voided": "",
//     "order.id": "",
//     "owner": "",
//     "pending": "",
//     "source_data.pan": "",
//     "source_data.sub_type": "",
//     "source_data.type": "",
//     "success": "",
// }
const PaymentResult = () => {
    const [receipt, setReceipt] = useState({})

    const location = useLocation();
    const navigate = useNavigate();
        function getKeys (prams) {
            let arr = [];

            for ( const [ key ] of prams.entries() ){
                arr = [...arr, key]
            }
            return arr.sort((a, b) => {
                if(a < b) return -1
                if(a > b) return 1
                else return 0
            })
        }
        const { payment_status_page } = styles;

    useEffect(() => {
        // if(document.referrer !== "https://ap.gateway.mastercard.com/"){
        //     navigate("/")
        // }
        document.querySelector("body").style.overflow = "hidden"
        const sc = location.search;
        const scDecoded = decodeURIComponent(sc);
        const q = scDecoded.substring(1);
        const prams = new Map();
        const parts = q.split("&");


        parts.forEach(part => {
            let [key, value] = part.split("=");

            prams.set(key, value);
        });

        getKeys(prams).forEach(key => {
            if(key === "error_occured") {
                // console.log("key:", prams.get(key))

            }
            setReceipt(prev => ({ ...prev, [key]: prams.get(key) }))
        })

        // let HMAC = prams.get("hmac")
        // let contactedValues = '';

        // getKeys(prams).forEach(key => {
        //     if(mainKeys.hasOwnProperty(key)){
        //         contactedValues += prams.get(key);
        //     }
        // });

        // const has = hex.stringify(hmacSHA512(sha256(contactedValues), "FE23BC762C6A6DD4A93438401FABEE2E"));
        // console.log(has)
        // if(has === HMAC){
        //     console.log("HMAC Test: ", "success")
        // }else {
        //     console.log("HMAC Test: ","faild")
            
        // }

        return () => {
            document.querySelector("body").style.overflow = "visible"

        }
    }, [ location.search ]);

    useEffect(() => {
        console.log(receipt)
        
    }, [receipt])

    return (
        <div className = { payment_status_page }>
                {
                    receipt.hasOwnProperty("amount_cents") ? 
                    <Card 
                    success = { receipt.success }
                    curr          = { receipt.currency }
                    Card          = { receipt["source_data.sub_type"] } 
                    Date          = { receipt.created_at } 
                    Amount        = { (receipt.amount_cents)/100 } 
                    Id            = { receipt.id } />  : 
                    <Loader />
                }

                {/* <ErrorMessage loading = {} /> */}
                {/* {

                    Object.keys(receipt).map( (k, i) => <li key = { i }> 
                        <span>{ k }: </span>
                        <span>{ receipt[k] }</span>
                    </li> )
                } */}

        </div>
    );
};


// const someData = 'Very genuine data';

//   const key = await window.crypto.subtle.generateKey({
//     name: "HMAC",
//     hash: {
//       name: "SHA-256"
//     }
//   },
//       true,
//       ["sign", "verify"]);

//   let enc = new TextEncoder().encode(someData);

//   const signature = await crypto.subtle.sign('HMAC', key, enc);

//   console.log(signature); // ArrayBuffer(32)
  
//   const valid = await crypto.subtle.verify('HMAC', key, signature, enc);
  
//   console.log(valid);







// amount_cents
// created_at
// currency
// error_occured
// has_parent_transaction
// id
// integration_id
// is_3d_secure
// is_auth
// is_capture
// is_refunded
// is_standalone_payment
// is_voided
// order.id
// owner
// pending
// source_data.pan
// source_data.sub_type
// source_data.type
// success

export default PaymentResult;

// http://localhost:3000/callback?is_standalone_payment=true&error_occured=false&integration_id=1801946&merchant_commission=0&order=33009370&created_at=2022-02-17T09%3A44%3A43.131498&amount_cents=500000&data.message=BLOCKED&profile_id=156204&is_refunded=false&is_capture=false&is_3d_secure=true&is_voided=false&source_data.pan=2346&hmac=d02cd59229fb782c2bb18a04806e74250b38d3cc1f803bdd7e62b3caadec4b9274d9212acd0e3b5f78466759e09ea7027efdb6cc322ac2cfdb746f506e380f95&source_data.sub_type=MasterCard&pending=false&owner=285145&is_refund=false&is_auth=false&id=26733291&txn_response_code=BLOCKED&currency=EGP&refunded_amount_cents=0&has_parent_transaction=false&is_void=false&captured_amount=0&source_data.type=card&success=false