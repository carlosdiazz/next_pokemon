import { CartCounter } from '@/app/shopping-cart';

export const metadata = {
 title: 'Counter Page',
 description: 'Counter Page',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Counter Page</h1>
      <CartCounter value={15}/>
    </div>
  );
}
