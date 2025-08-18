import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Input } from "../components/ui/Input";
import { Paragraph } from "../components/ui/Paragraph";
import { useEffect, useState } from "react";

export const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setDisabled(!(user && password));
  }, [user, password]);

  const handleUser = (e) => setUser(e.target.value);
  const handlePass = (e) => setPassword(e.target.value);

  return (
    <div className="px-[24px] py-[36px] gap-[24px] flex flex-col">
      <div className="flex flex-col gap-[24px]">
        <Heading content="Signin to your PopX account" />
        <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>
      <div className="flex flex-col gap-[24px]">
        <Input
          onChange={handleUser}
          placeholder="Enter your email"
          label="Email"
          type="email"
        />
        <Input
          onChange={handlePass}
          placeholder="Enter your password"
          label="Password"
          type="password"
        />
        <Link to="/account">
          <Button disabled={disabled} variant="primary" text="Login" />
        </Link>
      </div>
    </div>
  );
};
