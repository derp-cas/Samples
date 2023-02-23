import { ReactNode } from 'react';
import { useGlobalContext } from './context';

export interface ChildrenProps {
    children?: ReactNode;
}

export interface PageProps {
    page?: string;
    links?: { label: string; icon: JSX.Element; url: string }[];
}

export interface useGlobalContextProps {
    location?: {};
    isSubmenuOpen?: boolean;
    page?:
        | {
              page: string;
              links: {
                  label: string;
                  icon: JSX.Element;
                  url: string;
              }[];
          }
        | undefined;
}
