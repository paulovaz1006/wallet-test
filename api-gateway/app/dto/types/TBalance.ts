export type TBalance = {
  userId: string;
  amount: number;
  description: string;
  type_transaction_id: string;    
}

export type TBalanceWithoutUserId = Omit<TBalance, 'user_id'>;
