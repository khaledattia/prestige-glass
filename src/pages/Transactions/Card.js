import styles from './Transactions.module.css';
import { BsCheck2Circle, BsXCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { BsExclamationTriangle } from 'react-icons/bs'


export const Card = (props) => {

    const { Card, Date, Amount, Id, curr, success } = props;
    const { row, amount, btn, _card, card_head, btn_wrapper, note } = styles;
    const [date, time] = Date.split("T");

    const noteMessage = "Please make sure to take a screenshot for later refer back."
    const isSuccess = !JSON.parse( success );
    return (


        <>
            {/* <p className = { note }>
                
                
            </p> */}
            <ErrorMessage 
            icon = { <BsExclamationTriangle /> }
            message = { noteMessage } 
            color = "rgb(255, 102, 0)" 
            classes = { note } />

            <div className = { _card } >
                {
                    isSuccess ? 
                    <div className = { card_head }  style = {{ color: "#33BF7C" }} >
                        <h2>
                            Payment successfull!
                        </h2>

                        <div>
                            <BsCheck2Circle />
                        </div>
                    </div> : 
                    <div className = { card_head } style = {{ color: "#BF3333" }}>
                        <h2>
                            Transaction Faild!
                        </h2>

                        <div>
                            <BsXCircle />
                        </div>
                    </div>
                }

                <div style = {{ marginBottom: "2rem" }}>
                    <div className = { row }>
                        <p>Payment Type</p>
                        <p>{ Card }</p>
                    </div>
                    <div className = { row }>
                        <p>Date</p>
                        <p>{ date }</p>
                    </div>
                    <div className = { row }>
                        <p>Time</p>
                        <p>{ time && time.substring(0,5) }</p>
                        {/* <p>{ time.subString(0,6) }</p> */}
                    </div>

                    {    
                        isSuccess ?
                        <div className = { amount }>
                            <p>
                                Amount {" "}
                                <span>Paid</span>
                            </p>

                            <p>{ Amount + curr}</p>
                        </div> : <></>
                    }

                    <div className = { row } >
                        <p>Transaction Id</p>
                        <p>{ Id }</p>
                    </div>

                </div>

                <div className = { btn_wrapper }>
                    <Link to = "/">
                        <button className = { btn }>Close</button>
                    </Link>
                </div>
            </div>
        </>
    );
};



    /* txn_response_code: "AUTHENTICATION_FAILED"
    acq_response_code: "-"
    ​
    amount_cents: "120000"
    ​
    captured_amount: "0"
    ​
    created_at: "2022-02-18T09:13:59.177873"
    ​
    currency: "EGP"
    ​
    "data.message": "AUTHENTICATION_FAILED"
    ​
    error_occured: "false"
    ​
    has_parent_transaction: "false"
    ​
    hmac: "ba265d78543672a47c97de47e3990c19c70982d6d8ee2b20b06037bc7e9e91dc2fc374fc696c7b2fe71715a546ecb9905d8ef40edead91e9fda7ac3579ade3e7"
    ​
    id: "26845705"
    ​
    integration_id: "1801946"
    ​
    is_3d_secure: "true"
    ​
    is_auth: "false"
    ​
    is_capture: "false"
    ​
    is_refund: "false"
    ​
    is_refunded: "false"
    ​
    is_standalone_payment: "true"
    ​
    is_void: "false"
    ​
    is_voided: "false"
    ​
    merchant_commission: "0"
    ​
    order: "33139378"
    ​
    "order.id": ""
    ​
    owner: "285145"
    ​
    pending: "false"
    ​
    profile_id: "156204"
    ​
    refunded_amount_cents: "0"
    ​
    "source_data.pan": "2346"
    ​
    "source_data.sub_type": "MasterCard"
    ​
    "source_data.type": "card"
    ​
    success: "false"
    ​
    txn_response_code: "AUTHENTICATION_FAILED" */


    /* amount_cents: "100"
    ​
    captured_amount: "0"
    ​
    created_at: "2022-02-18T09:38:18.836934"
    ​
    currency: "EGP"
    ​
    "data.message": "BLOCKED"
    ​
    error_occured: "false"
    ​
    has_parent_transaction: "false"
    ​
    hmac: "01fccfff7c22a58e8137fbbea04888871a6a1b7ce7467262628afe0cfc8e16f4e085548d5be5b378a7fe8525bea1083bd98cd4b50e9f8d2d8dc49906824eabaa"
    ​
    id: "26846220"
    ​
    integration_id: "1801946"
    ​
    is_3d_secure: "true"
    ​
    is_auth: "false"
    ​
    is_capture: "false"
    ​
    is_refund: "false"
    ​
    is_refunded: "false"
    ​
    is_standalone_payment: "true"
    ​
    is_void: "false"
    ​
    is_voided: "false"
    ​
    merchant_commission: "0"
    ​
    order: "33139966"
    ​
    "order.id": ""
    ​
    owner: "285145"
    ​
    pending: "false"
    ​
    profile_id: "156204"
    ​
    refunded_amount_cents: "0"
    ​
    "source_data.pan": "2346"
    ​
    "source_data.sub_type": "MasterCard"
    ​
    "source_data.type": "card"
    ​
    success: "false"
    ​
    txn_response_code: "BLOCKED" */