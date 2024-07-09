import React, { createContext, useContext, useState, ReactNode } from "react";

type Address = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}

type AddressContextType = {
  address: Address;
  setAddress: React.Dispatch<React.SetStateAction<Address>>;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (context === undefined) {
    throw new Error("useAddress must be used within an AddressProvider");
  }
  return context;
};

export const AddressProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<Address>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
