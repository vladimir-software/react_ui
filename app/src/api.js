import { activeDocuments, trashDocuments } from "./data/documents";

export const fetchActiveDocuments = () => activeDocuments;
export const fetchTrashDocuments = () => trashDocuments;

export const fetchActiveDocument = (id) => {
  const result = activeDocuments.filter((x) => x.id === id);

  if (result.length === 0) {
    return null;
  }

  return result[0];
};

export const fetchTrashDocument = (id) => {
  const result = trashDocuments.filter((x) => x.id === id);

  if (result.length === 0) {
    return null;
  }

  return result[0];
};
