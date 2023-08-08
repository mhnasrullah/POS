import { useEffect, useState } from "react";
import Box from "../atom/Box";
import { getAllMenu } from "../../services/menus";
import MenuCard from "../molecul/MenuCard";

const useGetAllMenu = () => {
  const [allMenu, setAllMenu] = useState([]);

  const fetch = async () => {
    const {
      data: { datas },
    } = await getAllMenu();
    setAllMenu(datas);
  };

  useEffect(() => {
    fetch();
  }, []);

  return [allMenu];
};

export default function Main() {
  const [data] = useGetAllMenu();

  return (
    <main>
      <Box className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {data.map((menu, i) => (
          <MenuCard
            key={i}
            image={menu.gambar}
            name={menu.nama}
            id={menu.id}
            price={menu.harga}
          />
        ))}
      </Box>
    </main>
  );
}
