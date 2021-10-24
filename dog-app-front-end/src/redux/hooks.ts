import { TypedUseSelectorHook, useSelector as useReactSelector } from 'react-redux';
import type { RootState } from './store';

export const useSelector: TypedUseSelectorHook<RootState> = useReactSelector;
