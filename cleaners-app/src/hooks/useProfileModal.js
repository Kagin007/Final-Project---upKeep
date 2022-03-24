import { useState } from "react";

const useProfileModal = () => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const toggleProfileModal = () => {
    setProfileModalOpen(!profileModalOpen);
  };

  return {
    profileModalOpen,
    toggleProfileModal,
  };
};

export default useProfileModal;
