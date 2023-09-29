import { createContext } from 'react';

interface MyContextProps {
    message: string,
    updateMessage: (newValue: string) => void,

    count?: number | undefined,
    updateCount: (newValue?: number) => void
    
};

const MyContext = createContext<MyContextProps | undefined>(undefined);

export default MyContext;