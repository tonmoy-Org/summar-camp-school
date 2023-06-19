import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../component/SectionTitle";
import useSelectedClasses from "../../../hooks/useSelectedClasses";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Pk);
const Payment = () => {
    const [selectClass] = useSelectedClasses();
    const total = selectClass.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="lg:h-full">
            <SectionTitle heading='Payment' subHeading='Make your payment'></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectClass={selectClass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;