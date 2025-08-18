import { Card } from "../components/ui/Card";
import { useEffect, useState } from "react";
import { IoMdCamera } from "react-icons/io";

export const Account = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <div className="flex flex-col gap-[18px] text-neutral-600">
      <div className="tracking-tight font-semibold text-[20px] px-[18px] py-[24px] shadow bg-white">
        Account Settings
      </div>

      <Card
        img="https://tse3.mm.bing.net/th/id/OIP.xGAXVKjGAk2ITkuZTlJbKgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
        name={user.fullName || "Marry Doe"}
        email={user.email || "marry@gmail.com"}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        icon={<IoMdCamera className="h-4 w-4 text-white" />}
      />
    </div>
  );
};
