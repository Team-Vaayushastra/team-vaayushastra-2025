// components/SupportUsButton.tsx
import { Link } from "react-router-dom";
import SupportIcon from "../assets/support-btn.png"; 

const SupportUsButton = () => {
  return (
    <Link to="/support-us">
      <div
        className="fixed bottom-8 right-10 w-16 h-16 bg-white/15 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Support Us"
      >
        <img src={SupportIcon} alt="Support Us" width={52} height={52} />
      </div>
    </Link>
  );
};

export default SupportUsButton;
