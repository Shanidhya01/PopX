import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Input } from "../components/ui/Input";
import { Radio } from "../components/ui/Radio";

export const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(formData));
    // Navigate to Account/Profile page
    navigate("/account");
  };

  return (
    <div className="px-[24px] py-[44px] h-full flex flex-col justify-between">
      <div className="flex flex-col gap-[24px]">
        <Heading className="text-[24px] font-bold gap-[24px]" content={
          <>
            Create your <br /> PopX Account
          </>
        } />

        <Input
          label="Full Name"
          placeholder="Enter your Full Name"
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />
        <Input
          label="Phone Number"
          placeholder="Enter your Phone number"
          type="number"
          required
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <Input
          label="Email Address"
          placeholder="Enter your Email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <Input
          label="Password"
          placeholder="Enter your Password"
          type="password"
          required
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <Input
          label="Company Name"
          placeholder="Enter your Company Name"
          type="text"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />
        <Radio
          name="agency"
          values={["Yes", "No"]}
          label="Are you an Agency?"
          required
          value={formData.agency}
          onChange={(e) => handleChange("agency", e.target.value)}
        />
      </div>

      <Button variant="primary" text="Create Account" onClick={handleSubmit} />
    </div>
  );
};
