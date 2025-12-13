import { createSweet, getAllSweets, findSweetById, updateSweet, deleteSweet, searchSweets } from '../models/Sweet.js';

const addSweet = async (sweet: { name: string; category: string; price: number; quantity: number; imageUrl?: string }): Promise<number> => {
  return await createSweet(sweet);
};

const getSweets = async (): Promise<any[]> => {
  return await getAllSweets();
};

const getSweetById = async (id: number): Promise<any | null> => {
  return await findSweetById(id);
};

const updateSweetById = async (id: number, updates: Partial<{ name: string; category: string; price: number; quantity: number }>): Promise<void> => {
  await updateSweet(id, updates);
};

const deleteSweetById = async (id: number): Promise<void> => {
  await deleteSweet(id);
};

const searchSweetsByQuery = async (query: string): Promise<any[]> => {
  return await searchSweets(query);
};

const purchaseSweet = async (id: number, quantity: number): Promise<void> => {
  const sweet = await findSweetById(id);
  if (!sweet) {
    throw new Error('Sweet not found');
  }
  if (sweet.quantity < quantity) {
    throw new Error('Insufficient stock');
  }
  await updateSweet(id, { quantity: sweet.quantity - quantity });
};

const restockSweet = async (id: number, quantity: number): Promise<void> => {
  const sweet = await findSweetById(id);
  if (!sweet) {
    throw new Error('Sweet not found');
  }
  await updateSweet(id, { quantity: sweet.quantity + quantity });
};

export {
  addSweet,
  getSweets,
  getSweetById,
  updateSweetById,
  deleteSweetById,
  searchSweetsByQuery,
  purchaseSweet,
  restockSweet
};