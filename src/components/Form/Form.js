import { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { BsCreditCard2Back, BsArrowRight, BsArrowUp } from 'react-icons/bs';
import paymentImg from "@assets/imgs/paymentMethods.png"
import { Loader } from '@components/Loader/Loader';
import getPaymentKey from '@services/_paymentIntegration';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { BsXOctagon } from 'react-icons/bs';

const scheme = {
    first_name: {
        config: {
            require: true,
        },
        message: {
            require: "First Name is required",
            regex: "please make sure its containing only texts and no spaces"
        }

    },
    last_name: {
        config: {
            require: true,
        },
        message: {
            require: "Last Name is required",
            regex: "invalid input"
        }

    },
    email: {
        config: {
            require: true,
            regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        message: {
            require: "Email is required",
            regex: "you have entered an invalid email address"
        }

    },
    phone_number: {
        config: {
            require: true,
            regex: /^01[0125][0-9]{8}$/gm
        },
        message: {
            require: "Mobile is required",
            regex: "invalid mobile number"
        }

    },
    amount: {
        config: {
            require: true,
            regex: /^[0-9]*$/gm
        },
        message: {
            require: "Amount field is required",
            regex: "invalid amount"
        }

    }
}

export const Form = ({ setActiveForm, state, setState }) => {
    
    // form variables
    const [admession, setAdmession] = useState(false);
    const [errors, setErrors] = useState({ length: 0 })
    const [loading, setLoading] = useState("idle");
    const [ chWarning, setChWarning ] = useState(false);
    // component classes
    const { 
        form_container,
        control,
        form_group,
        btn,
        form,
        _amount,
        currency,
        loader_wrapper,
        text,
        error,
        alert,
        submitting,
        from_body,
        note_wrapper,
        warning,
        i,
        animate_ErrMsg
    } = styles


    useEffect(() => {
        let funRef = 0;

        if(loading !== "idle" || loading !== "loading") {
            funRef = setTimeout(() => {
                setLoading("idle")
            }, 10000)
        }

        return () => {
            if(loading !== "idle" || loading !== "loading") {
                clearTimeout( funRef )
            }
        }
    }, [ loading ])

    useEffect(() => {
        document.querySelector("body").style.overflow = "hidden"

        function handleKeyDown({ key }) {
            if(key === "Escape") {
                setActiveForm(false);
            }
        }

        function handleClick({ target }) {
            const formEl = document.querySelector(`.${ from_body }`);
            const errMsg = document.querySelector("#err");
            if( formEl.contains(target) || 
            errMsg.contains(target)) {
                setActiveForm(true);
                return
            }

            setActiveForm(false)

        }

        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleClick);
            document.querySelector("body").style.overflow = "visible";
            setLoading("idle")
        }

    }, [ form ])

    useEffect(() => {
        // const sha = sha512("Message")
        // console.log(Base64.stringify(HmacSHA512("Message", "secret")))

        const inputs = document.querySelectorAll(`.${ control }`);
        inputs.forEach(({ name }) => {
            setErrors(prev => ({...prev, [name]: ""}))
        });

    }, [control])


    // --------------- handles Form inputs onChange
    function handleChnage({ target }) {
        const field = target.name;
        const value = target.value;

        
        switch(field){
            case "first_name":
                setState({ ...state, first_name: value});
            break;

            case "last_name":
                setState({ ...state, last_name: value});
            break;

            case "email":
                setState({ ...state, email: value});
            break;

            case "phone_number":
                setState({ ...state, phone_number: value});
            break;

            case "amount":
                if( value.match(scheme.amount.config.regex) || 
                value === "") {
                    setState({ ...state, amount: value});
                }

                if (parseInt(value) < 1){
                    setState({ ...state, amount: ""});
                }

            break;

            default:
                return;
        }

    }

    // --------------- check validation and return array
    // include eather [true] || [false, ErrorMessage] 
    function checkvalidation(field, value) {
        const config  = scheme[field].config;
        const message = scheme[field].message;
        const val = value.trim();

        if(field === "amount" && parseInt(val) < 1) {
            return[false, "amount should not be less than 1"]

        }
        if ((field === "first_name" || field === "last_name")
        && val.indexOf(" ") > 0) {
            return[false, "multiple names are not allowed"]
        }

        if ( config.require && !val ) {
            return [false, message.require];
        }
        
        if ( config.regex && !value.match(config.regex) ) {
            return [false, message.regex];
        }

        return [true];
    }

    // --------------- handle Errors State
    function handleValidation({ target }) {

        const field = target.name;
        const value = target.value;
        const [isValid, message] = checkvalidation(field, value);

        if ( !isValid ) {
            setErrors(prev => {
                let length = prev.length;

                if( !prev[field] ) {
                    length += 1;
                }

                return ({...prev,  [field]: message, length })
            })
            return;
        }

        setErrors(prev => {
            let length = prev.length
            if( prev[field] ) {
                length -=1
            }
            return ({...prev,  [field]: "", length })
        });
    }


    // --------------- handle the form on submit
    async function handleSubmit(e) {
        e.preventDefault();

        const {
            amount,
            email,
            first_name,
            phone_number,
            last_name
        } = state;

        let TempErrors = [];
        Object.keys( state ).forEach( key => {
            const arr = checkvalidation(key, state[key]);
            TempErrors = [ ...TempErrors, arr[0] ];
        })
        

        if ( TempErrors.indexOf( false ) > -1 ) {
            
            Object.keys( state ).forEach( key => {
                const target = {
                    name: key, 
                    value: state[key]
                }
                handleValidation( { target } );
            })

            if(!admession) {
                setChWarning( true );
            }

            return;
        }

        const formdata = {
            amount_cents: parseInt(amount) * 100,
            billing_data: {
                email,
                first_name,
                phone_number,
                last_name
            }
        }

        if(!admession) {
            setChWarning( true );
            return
        }

        
        setLoading("loading");
        console.log( formdata );
        const { token } = await getPaymentKey( formdata, setLoading );
        
        setTimeout(() => {
            
            setLoading( "idle" );
            window.location.href = `https://accept.paymob.com/api/acceptance/iframes/347454?payment_token=${ token }`;
        }, 1000);
    }




    return (
        <div className = { form_container }>
            <div className =  { from_body }>
            <h2>
                <BsCreditCard2Back />
                <div style={{ 
                    userSelect:"none", 
                    cursor:"default",
                    textShadow: "1px 2px 4px rgba(0,0,0,0.25)"
                }}>
                    Payment Form
                </div>
            </h2>

            <div style={{ 
                display: "flex", 
                marginBottom: "1rem",
                position:"relative", 
                fontSize: "1.25rem",
                textShadow: "1px 1px 10px rgba(0,0,0,0.25)",
                color:"#7F98C5" }}>
                Pay via
                <div style={{ 
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    margin: "0 auto" }}>

                    <BsArrowRight />
                </div>
                <img
                style={{marginLeft: "auto"}}
                src = { paymentImg } 
                alt = "payment methods" />
            </div>
            
            {/* form */}
            <form className = { loading === 'loading'?  `${ form } ${ submitting }` : form } onSubmit = { handleSubmit }>
                <div className = { `${ errors.first_name ? `${ error } ${ form_group }` : form_group }` }>
                    <label htmlFor = 'first-name'>
                        First Name
                        <span className='danger'>*</span>
                    </label>

                    <input 
                    onChange  = { handleChnage }
                    onBlur    = { handleValidation }
                    value     = { state.first_name }
                    type      = "text" 
                    id        = 'first-name' 
                    name      = 'first_name' 
                    className = { `${control} ${error}` } />

                    {errors.first_name ? <div className = { alert }>{errors.first_name}</div> : null}
                </div>

                <div className = { `${ errors.last_name ? `${ error } ${ form_group }` : form_group }` }>
                    <label htmlFor = 'last_name'>
                        Last Name
                        <span className='danger'>*</span>
                    </label>

                    <input 
                    
                    onChange  = { handleChnage }
                    onBlur    = { handleValidation }
                    value     = { state.last_name }
                    type      = "text" 
                    id        = 'last_name' 
                    name      = 'last_name' 
                    className = { control } />

                    {errors.last_name ? <div className = { alert }>{errors.last_name}</div> : null}
                </div>

                <div className = { `${ errors.email ? `${ error } ${ form_group }` : form_group }` }>
                    <label htmlFor = 'email'>
                        Email
                        <span className='danger'>*</span>
                    </label>

                    <input 
                    
                    onChange  = { handleChnage }
                    onBlur    = { handleValidation }
                    value     = { state.email }
                    type      = "text" 
                    id        = 'email' 
                    name      = 'email' 
                    placeholder='abc@example.com'
                    className = { control } />
                    {errors.email ? <div className = { alert }>{errors.email}</div> : null}
                </div>

                <div className = { `${ errors.phone_number ? `${ error } ${ form_group }` : form_group }` }>
                    <label htmlFor = 'mobile'>
                        Mobile
                        <span className='danger'>*</span>
                    </label>

                    <input 
                    onChange  = { handleChnage }
                    onBlur    = { handleValidation }
                    value     = { state.phone_number }
                    type      = "number" 
                    id        = 'mobile' 
                    name      = 'phone_number' 
                    placeholder='Enter your mobile number'
                    className = { control } />
                    {errors.phone_number ? <div className = { alert }>{errors.phone_number}</div> : null}
                </div>

                <div className = { `${ errors.amount ? `${ error } ${ form_group }` : form_group }` }>
                    <label htmlFor = 'amount'>
                        Amount
                        <span className='danger'>*</span>
                    </label>

                    <div style={{ 
                        display: "flex",
                        // flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <input 
                    
                        onChange = { handleChnage }
                        onBlur = { handleValidation }
                        value = { state.amount }
                        type = "text"
                        id   = 'amount' 
                        name = 'amount' 
                        placeholder = 'Example: 2000'
                        className = { `${ control } ${ _amount }` } />

                        <div className = { currency }
                        >EGP</div>
                    </div>
                    {errors.amount ? <div className = { alert }>{errors.amount}</div> : null}
                </div>


                <div className = { note_wrapper }>

                    <label>
                        <input 
                        style={{ 
                            marginRight: "0.5rem",
                        }} 
                        onChange = { () => {setAdmession( prev => !prev ); setChWarning(false)} }
                        type="checkbox" 
                        name = "confess" />
                        by Filling out this form is considered an admission that you contacted us for one or more of our services and chose in your complete freedom to pay us via online payment.
                    </label>

                    { 
                        chWarning ? 
                        <>
                            <div className = { i } >
                                <BsArrowUp />
                            </div>

                            
                            <div className = { warning }>
                                To continue please read the note and check the box by your Agreement 
                            </div>  
                        </> :
                        <></>
                    }
                </div>

                <button 
                type = 'submit' 
                className = { btn }>
                    <div className = { text }>Continue to Payment</div>
                    {
                        loading === 'loading' ? 
                        <div className = { loader_wrapper }>
                            <Loader />
                        </div> : 
                        <></>
                    }
                </button>
            </form>

            </div>

            <span id = "err" >
                {
                    loading === "loading" || 
                    loading === "idle" ?
                    <></> :
                    <ErrorMessage 
                    icon = { <BsXOctagon /> }
                    message = { loading } 
                    color   = "#f66" 
                    classes = { animate_ErrMsg } />
                }
            </span>
        </div>
    );
};