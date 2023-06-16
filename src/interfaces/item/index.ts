import { TransactionInterface } from 'interfaces/transaction';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface ItemInterface {
  id?: string;
  name: string;
  price: number;
  vendor_id?: string;
  created_at?: any;
  updated_at?: any;
  transaction?: TransactionInterface[];
  vendor?: VendorInterface;
  _count?: {
    transaction?: number;
  };
}

export interface ItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  vendor_id?: string;
}
