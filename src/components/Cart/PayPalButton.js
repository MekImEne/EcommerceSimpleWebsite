import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            this.props.clearCart();
            this.props.history.push('/');
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        //let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
 
        const client = {
            sandbox: process.env.REACT_APP_APP_ID,
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn 
                env={env} 
                client={client} 
                currency={currency} 
                total={this.props.total} 
                onError={onError} 
                onSuccess={onSuccess} 
                onCancel={onCancel}     
            />
        );
    }
}