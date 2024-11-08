export const OptionalChaining = () => {
  const user = {
    name: "Aditi",
    address: {
      city: "Mumbai",
      
    },
  };
  return <strong>{user?.address?.city}</strong>;
};
