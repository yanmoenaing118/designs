import Button from "../utils/Button";

export default function ConfirmCheckout({ onPrev, onNext }) {
  return (
    <div>
      <div>
        <div className="font-bold text-gray-600 uppercase">
          Personal Information
        </div>
        <div>Name: Yan Moe Naing</div>
        <div>Email: yan@mail.com</div>
        <div>Phone: 09768047177</div>
      </div>
      <div className="mt-6">
        <div className="font-bold text-gray-600 uppercase">Address</div>
        <div>Country: Myanmar</div>
        <div>Division: Yangon</div>
        <div>City: Yangon</div>
        <div>Township: Hlaing</div>
      </div>

      <div className="flex justify-between mt-4">
        <Button text="Back" onClick={onPrev} />
        <Button text="Confirm" onClick={onNext} />
      </div>
    </div>
  );
}
