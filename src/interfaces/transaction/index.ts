import { UserInterface } from 'interfaces/user';
import { ItemInterface } from 'interfaces/item';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  customer_id?: string;
  item_id?: string;
  amount: number;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  item?: ItemInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  item_id?: string;
  status?: string;
}
