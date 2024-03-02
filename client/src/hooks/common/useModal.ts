import { useState, useCallback } from 'react';

export function useModal(defaultState: boolean) {
  const [isOpen, setIsOpen] = useState(defaultState);
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return {isOpen, openModal, closeModal};
};