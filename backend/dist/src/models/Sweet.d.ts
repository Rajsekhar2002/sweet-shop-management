interface Sweet {
    id?: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    imageUrl?: string;
}
declare const createSweet: (sweet: Sweet) => Promise<number>;
declare const getAllSweets: () => Promise<Sweet[]>;
declare const findSweetById: (id: number) => Promise<Sweet | null>;
declare const updateSweet: (id: number, sweet: Partial<Sweet>) => Promise<void>;
declare const deleteSweet: (id: number) => Promise<void>;
declare const searchSweets: (query: string) => Promise<Sweet[]>;
export { createSweet, getAllSweets, findSweetById, updateSweet, deleteSweet, searchSweets };
//# sourceMappingURL=Sweet.d.ts.map