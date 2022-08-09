import useCheckout from "../../hooks/useCheckout";
import Button from "../utils/Button";

export default function ConfirmCheckout({ onPrev, onNext }) {

  const { checkoutState: { user } } = useCheckout();

  return (
    <div>
      <div>
        <div className="font-bold text-gray-600 uppercase">
          Personal Information
        </div>
        <div>Name: {user?.fullname} </div>
        <div>Email: { user?.email }</div>
        <div>Phone: { user?.phone }</div>
      </div>
      <div className="mt-6">
        <div className="font-bold text-gray-600 uppercase">Address</div>
        <div>Country: {user?.address?.country?.label} </div>
        <div>Division: {user?.address?.division?.label}</div>
        <div>City: {user?.address?.city?.label}</div>
        <div>Township: {user?.address?.township?.label}</div>
      </div>

      <div className="flex justify-between mt-4">
        <Button text="Back" onClick={onPrev} />
        <Button text="Confirm" onClick={onNext} />
      </div>
    </div>
  );
}
