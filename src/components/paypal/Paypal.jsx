import { useEffect } from "react"

export default function PayPal() {

    useEffect(() => {
        if (window.PayPal) {
            // "if" Because the SDK injects the button dynamically and your component doesn’t “own” it in JSX, so React can’t see it as a normal element
            window.PayPal.Donation.Button({
                env: 'sandbox',
                hosted_button_id: 'YOUR_SANDBOX_HOSTED_BUTTON_ID',
                // Replace with your PayPal hosted_button_id from a Donate button
                // image: {
                //     src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
                //     title: 'PayPal - The safer, easier way to pay online!',
                //     alt: 'Donate with PayPal button'
                // },
                onComplete: function () {
                    console.log('Thank You!');
                },
            }).render('#paypal-donate-button-container');
        }
    }, []);

    return (

        <div id="paypal-donate-button-container">

        </div>

    )
}