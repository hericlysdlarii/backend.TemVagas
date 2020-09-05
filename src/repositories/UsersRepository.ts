import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/User';

interface ExampleDTO {
    name: string;
    email: string;
    wphone_number: string;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
    public async getBalance(): Promise<ExampleDTO | null> {
        return null;
    }
}

export default TransactionsRepository;
