import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

const transactions = [
  {
    id: 1,
    name: 'Netflix Subscription',
    amount: -15.99,
    date: '2024-01-15',
    type: 'Entertainment',
  },
  {
    id: 2,
    name: 'Salary Deposit',
    amount: 3200.00,
    date: '2024-01-14',
    type: 'Income',
  },
  {
    id: 3,
    name: 'Grocery Store',
    amount: -64.53,
    date: '2024-01-13',
    type: 'Food',
  },
  {
    id: 4,
    name: 'Gas Station',
    amount: -45.00,
    date: '2024-01-12',
    type: 'Transportation',
  },
  {
    id: 5,
    name: 'Freelance Payment',
    amount: 850.00,
    date: '2024-01-11',
    type: 'Income',
  },
];

export function RecentTransactions() {
  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <Avatar className="h-9 w-9">
                <div className={`w-full h-full flex items-center justify-center ${
                  transaction.amount > 0 ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {transaction.amount > 0 ? '+' : '-'}
                </div>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">
                  {transaction.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {transaction.type}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-medium ${
                transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {transaction.amount > 0 ? '+' : ''}
                ${Math.abs(transaction.amount).toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(transaction.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}