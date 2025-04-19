import React, { useState, useEffect, useContext, createContext } from "react";
import items from "./data";

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  useEffect(() => {
    let rooms = formatData(items);
    let featured = rooms.filter(room => room.featured === true);
    let maxP = Math.max(...rooms.map(item => item.price));
    let maxS = Math.max(...rooms.map(item => item.size));

    setRooms(rooms);
    setSortedRooms(rooms);
    setFeaturedRooms(featured);
    setLoading(false);
    setPrice(maxP);
    setMaxPrice(maxP);
    setMaxSize(maxS);
  }, []);

  useEffect(() => {
    filterRooms();
  }, [type, capacity, price, minSize, maxSize, breakfast, pets]);

  const formatData = items => {
    return items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      return { ...item.fields, images, id };
    });
  };

  const getRoom = slug => {
    return rooms.find(room => room.slug === slug); // "slug" вместо "zebra", если в данных такое поле
  };

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case "type":
        setType(value);
        break;
      case "capacity":
        setCapacity(parseInt(value));
        break;
      case "price":
        setPrice(parseInt(value));
        break;
      case "minSize":
        setMinSize(parseInt(value));
        break;
      case "maxSize":
        setMaxSize(parseInt(value));
        break;
      case "breakfast":
        setBreakfast(value);
        break;
      case "pets":
        setPets(value);
        break;
      default:
        break;
    }
  };

  const filterRooms = () => {
    let tempRooms = [...rooms];
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    tempRooms = tempRooms.filter(room => room.price <= price);
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    setSortedRooms(tempRooms);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        getRoom,
        handleChange
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export const useRoomContext = () => useContext(RoomContext);
export { RoomContext };
