import { useAppSelector } from 'app/providers/StoreProvider';

export const useCounter = () => useAppSelector((state) => state.counter);
