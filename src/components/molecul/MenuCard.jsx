/* eslint-disable react/prop-types */
import { useContext } from "react";
import Button from "../atom/Button";
import Context from "../../context";

export default function MenuCard({id, image, name, price}) {

  const {dispatch} = useContext(Context)

  return (
    <div className="p-2 rounded-md shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-[180px] object-cover object-center"
      />
      <h6 className="font-medium mt-2">{name}</h6>
      <p className="text-main font-medium">
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(price)}
      </p>
      <Button
        onClick={() => dispatch.setCart({ image, name, price, id })}
        className="w-full mt-2"
      >
        + Tambahkan ke keranjang
      </Button>
    </div>
  );
}
