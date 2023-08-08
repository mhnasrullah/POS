/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import Context from ".";

const Provider = ({ children }) => {
  const [state, setState] = useState({
    cart: [],
  });

  const setCart = useCallback(
    (data) => {
      if (!state.cart.find((menu) => menu.id === data.id)) {
        setState({
          ...state,
          cart: [
            ...state.cart,
            {
              ...data,
              total: 1,
              note: "",
            },
          ],
        });
      }
    },
    [setState, state]
  );

  const addNote = useCallback(
    (note, id) => {
      const dataIndex = state.cart.findIndex((menu) => menu.id === id);

      const allData = state.cart;
      allData[dataIndex].note = note;

      setState({
        ...state,
        cart: allData,
      });
    },
    [setState, state]
  );

  const setTotal = useCallback(
    (isPlus, id) => {
      const dataIndex = state.cart.findIndex((menu) => menu.id === id);

      const allData = state.cart;
      allData[dataIndex].total = isPlus
        ? allData[dataIndex].total + 1
        : allData[dataIndex].total > 0
        ? allData[dataIndex].total - 1
        : allData[dataIndex].total;

      setState({
        ...state,
        cart: allData,
      });
    },
    [setState, state]
  );

  const dispatch = {
    setCart,
    addNote,
    setTotal
  };

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
