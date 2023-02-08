import { createContext, ReactNode, useEffect, useState } from "react";

type ShopSpellContextType= {
    spells: string[] | undefined;
    addSpells: () => Promise<void>
}

type ShopSpellContextProviderType={
    children: ReactNode;
}

export const ShopSpellContext =  createContext({} as ShopSpellContextType);

export function ShopSpellContextProvider(props: ShopSpellContextProviderType) {
    const [spells, setSpells] = useState<string[]>();
    const [showCart, setShowCart] = useState(false)

    async function addSpells(){

    }

    return(
        <ShopSpellContext.Provider value={{
            spells,
            addSpells
            }}>
            {props.children}
        </ShopSpellContext.Provider >

    )
}
