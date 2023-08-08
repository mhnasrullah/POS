import { ShoppingCartIcon} from '@heroicons/react/24/solid'
import Box from "../atom/Box";
import Button from "../atom/Button";
import Logo from "../atom/Logo";
import { useContext } from 'react';
import Context from '../../context';

export default function Navbar({setShow}) {

  const {state} = useContext(Context)

  return (
    <nav className="py-4">
      <Box className="flex justify-between items-center">
        <Logo/>
        <div className='relative'>
          {state?.cart.length > 0 && (
            <div className='absolute -right-2 -top-2 w-5 h-5 flex items-center justify-center rounded-full bg-[#ed2821]'>
              <p className='text-sm text-white'>{state.cart.length}</p>
            </div>
          )}
          <Button
          onClick={() => setShow(true)}
          className="flex items-center text-dark"
          isOutline>
            <ShoppingCartIcon className="w-5 h-5 text-main mr-1"/>
            Keranjang
          </Button>
        </div>
      </Box>
    </nav>
  )
}
