/* eslint-disable react/prop-types */
import { useContext } from "react";
import Logo from "../atom/Logo";
import {  XMarkIcon } from "@heroicons/react/24/outline";
import Context from "../../context";
import Button from "../atom/Button";
import { createPay } from "../../services/order";

export default function Cart({ setShow }) {
  const { state, dispatch } = useContext(Context);

  const getTotal = state?.cart.map(menu => menu.price * menu.total)?.reduce((a,b)=>a+b,0)

  const handlePay = async () => {
    const response = await createPay({
      amount: getTotal,
      items : state.cart.map((menu)=>({id:menu.id,harga:menu.harga,catatan:menu.note})),
      discount: 0
    })

    console.log(response,'response')
  }

  return (
    <div className="px-4 z-[1000] fixed inset-0 min-h-screen bg-[#00000055]">
      <div className="absolute right-0 min-h-screen w-full max-w-[500px] bg-white shadow-lg">
        <div className="flex justify-between items-center p-4 ">
          <Logo />
          <button className="p-2" onClick={() => setShow(false)}>
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {state?.cart.map((menu, key) => (
            <div key={key} className="flex">
              <img
                src={menu.image}
                className="w-20 h-20 object-cover object-center"
                alt={menu.name}
              />
              <div className="w-full pr-4">
                <h6 className="font-medium">{menu.name}</h6>
                <p className="text-main font-medium">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(menu.price)}
                </p>
                <div className="flex items-center space-x-2 w-[80px] ml-auto justify-between">
                  <Button onClick={() => dispatch.setTotal(false, menu.id)}>
                    -
                  </Button>
                  <p>{menu.total}</p>
                  <Button onClick={() => dispatch.setTotal(true, menu.id)}>
                    +
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="p-4">
          <div>
            <DocumentTextIcon className="text-main w-6 h-6" />
            <p className="text-dark">Tambah Voucher</p>
          </div>
          <input type="text" />
        </div> */}

        <div className="p-4">
          <div className="bg-bg p-2 flex justify-between">
            <p>Total</p>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(getTotal)}
          </div>
        </div>

        {state?.cart.length > 0 && (
          <div className="px-4">
            <Button className="w-full" onClick={handlePay}>Checkout</Button>
          </div>
        )}
      </div>
    </div>
  );
}
