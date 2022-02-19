
async function getToken(cud) {
    try{
        console.log("fetching Token...");
        const body = {
            "api_key": "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnVZVzFsSWpvaWFXNXBkR2xoYkNJc0ltTnNZWE56SWpvaVRXVnlZMmhoYm5RaUxDSndjbTltYVd4bFgzQnJJam94TlRZeU1EUjkuS3VsMmZFVDVpREF0VHNuLUMyTE5wbHJnMFZzWkxuT0VVZ19qVnptOWpLcW9OTDREemJfN283VFE2ejFLWXJoemRNbU5peVBhM1RrbGl5djdVTVVKN2c="
        }
        const data = JSON.stringify(body);
        const token = await fetch("https://accept.paymob.com/api/auth/tokens", {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.json())
        .then(d => {
            const { token } = d;
            console.log("ID: ", token)
            return d;
        })

        console.log("fetching Token is done!");
        return  [ token, cud ];
    }
    catch(err) {
        let errMsg = err.message
        let indexOfFirstSpace = errMsg.indexOf(" ");
        let networkerror = errMsg.substring(0, indexOfFirstSpace ).toLowerCase()

        if( networkerror === 'networkerror') {
            console.log("Poor network connection detected. please check your connectivity")
        }else {
            console.log("something went worng!")
        }

    }

}

async function getId( response ) {
    const [ { token }, cud ] = response;
    try{
        console.log("fetching ID...");

        const body = {
            auth_token: token,
            delivery_needed: false,
            amount_cents: cud.amount_cents,
            currency: "EGP",
            items: []
        }

        const promise = await fetch("https://accept.paymob.com/api/ecommerce/orders", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())

        console.log("fetching ID is done!");
        return promise;
    }
    catch(err) {
        let errMsg = err.message
        let indexOfFirstSpace = errMsg.indexOf(" ");
        let networkerror = errMsg.substring(0, indexOfFirstSpace ).toLowerCase()
        
        if( networkerror === 'networkerror') {
            console.log("Poor network connection detected. please check your connectivity")
        }else {
            console.log("something went worng!")
        }

        
    }
}


async function getPaymentKey(cud, set) {
    try{
        console.log("fetching payment Key...");
        const res = await getToken(cud);
        console.log(res)
        const { id, amount_cents, currency  } = await getId( res );
        
        const body = {
            auth_token: res[0].token, // done
            amount_cents: amount_cents, // done
            expiration: 3600, // done
            order_id: id, // done
            billing_data: {
              apartment: "NA", 
              email: res[1].billing_data.email, // done
              floor: "NA", 
              first_name: res[1].billing_data.first_name, // done
              street: "NA", 
              building: "NA", 
              phone_number: res[1].billing_data.phone_number, // done
              shipping_method: "NA", 
              postal_code: "NA", 
              city: "NA", 
              country: "NA", 
              last_name: res[1].billing_data.last_name, // done
              state: "NA"
            }, 
            currency: currency, // done
            integration_id: 1801946, // done
            lock_order_when_paid: false
        }

        const paymentKey = await fetch("https://accept.paymob.com/api/acceptance/payment_keys", {
            method: 'POST',
            body: JSON.stringify( body ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {console.log("status: ",res.status); return res.json()})
        
        console.log("initailizing payment Key is done!");
        return paymentKey;
    }
    catch(err) {
        let errMsg = err.message
        let indexOfFirstSpace = errMsg.indexOf(" ");
        let networkerror = errMsg.substring(0, indexOfFirstSpace ).toLowerCase()
        
        if( networkerror === 'networkerror') {
            let msg = "Poor network connection detected. please check your connectivity";
            set( msg );
        }else {
            let msg ="something went worng!";
            set( msg );
        }

    }
}

export default getPaymentKey;


