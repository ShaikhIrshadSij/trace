import { create } from 'zustand';

type NavigationState = {
    title: string;
    status: string | null;
    breadcrumb: string[];
    isBackButtonVisible: boolean;

    setNavigation: (payload: Partial<Omit<NavigationState, 'setNavigation'>>) => void;
};

export const useNavigationStore = create<NavigationState>((set) => ({
    title: '',
    status: null,
    breadcrumb: [],
    isBackButtonVisible: false,

    setNavigation: (payload) => set((state) => ({ ...state, ...payload })),
}));
