import React from "react";
import { useRoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

const FeaturedRooms = () => {
  const { loading, featuredRooms } = useRoomContext();

  const rooms = featuredRooms.map(room => <Room key={room.id} room={room} />);

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
};

export default FeaturedRooms;
