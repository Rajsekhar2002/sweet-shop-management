declare const addSweet: (sweet: {
    name: string;
    category: string;
    price: number;
    quantity: number;
    imageUrl?: string;
}) => Promise<number>;
declare const getSweets: () => Promise<any[]>;
declare const getSweetById: (id: number) => Promise<any | null>;
declare const updateSweetById: (id: number, updates: Partial<{
    name: string;
    category: string;
    price: number;
    quantity: number;
}>) => Promise<void>;
declare const deleteSweetById: (id: number) => Promise<void>;
declare const searchSweetsByQuery: (query: string) => Promise<any[]>;
declare const purchaseSweet: (id: number, quantity: number) => Promise<void>;
declare const restockSweet: (id: number, quantity: number) => Promise<void>;
export { addSweet, getSweets, getSweetById, updateSweetById, deleteSweetById, searchSweetsByQuery, purchaseSweet, restockSweet };
//# sourceMappingURL=sweetService.d.ts.map