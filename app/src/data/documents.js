import { DOCUMENT_STATUS, STATUS } from "../constants";

export const activeDocuments = [
  {
    id: 1,
    pageCount: 3,
    status: DOCUMENT_STATUS.PROCESSED,
    details: {
      counterpartyName: "Counterparty A",
      invoiceNumber: "INV-A",
      amount: "$1,000,000.00",
      status: STATUS.GENERATED,
    },
  },
  {
    id: 2,
    pageCount: 8,
    status: DOCUMENT_STATUS.PROCESSED,
    details: {
      counterpartyName: "Counterparty B",
      invoiceNumber: "INV-B",
      amount: "$500,000.00",
      status: STATUS.GENERATED,
    },
  },
  {
    id: 3,
    pageCount: 12,
    status: DOCUMENT_STATUS.UNPROCESSED,
  },
  {
    id: 4,
    pageCount: 3,
    status: DOCUMENT_STATUS.UNPROCESSED,
  },
  {
    id: 5,
    pageCount: 1,
    status: DOCUMENT_STATUS.UNPROCESSED,
  },
  {
    id: 6,
    pageCount: 20,
    status: DOCUMENT_STATUS.PROCESSED,
    details: {
      counterpartyName: "Counterparty C",
      invoiceNumber: "INV-C",
      amount: "$10,000,000.00",
      status: STATUS.GENERATED,
    },
  },
  {
    id: 7,
    pageCount: 7,
    status: DOCUMENT_STATUS.UNPROCESSED,
  },
  {
    id: 8,
    pageCount: 1,
    status: DOCUMENT_STATUS.PROCESSED,
    details: {
      counterpartyName: "Counterparty D",
      invoiceNumber: "INV-D",
      amount: "$100,000.00",
      status: STATUS.GENERATED,
    },
  },
  {
    id: 9,
    pageCount: 10,
    status: DOCUMENT_STATUS.PROCESSED,
    details: {
      counterpartyName: "Counterparty E",
      invoiceNumber: "INV-E",
      amount: "$200,000.00",
      status: STATUS.GENERATED,
    },
  },
  {
    id: 10,
    pageCount: 1,
    status: DOCUMENT_STATUS.UNPROCESSED,
  },
];

export const trashDocuments = [
  {
    id: 1,
    pageCount: 6,
  },
  {
    id: 2,
    pageCount: 2,
  },
  {
    id: 3,
    pageCount: 12,
  },
  {
    id: 4,
    pageCount: 1,
  },
  {
    id: 5,
    pageCount: 1,
  },
  {
    id: 6,
    pageCount: 9,
  },
  {
    id: 7,
    pageCount: 4,
  },
  {
    id: 8,
    pageCount: 3,
  },
  {
    id: 9,
    pageCount: 5,
  },
  {
    id: 10,
    pageCount: 30,
  },
];
