import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "75vh",
};

const center = {
  lat: 23.8041,
  lng: 90.4152,
};


const Location = () => {
  return (
    <div>
      <h1 style={headingStyle}>Welcome to the Car Washing Booking System</h1>
      <LoadScript googleMapsApiKey="AIzaSyDbd-gwqVABJSOtt57JaDtBW7BATlJKY2A">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          options={{ mapId: "1ebc3ed57e00574e" }}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

const headingStyle = {
  fontFamily: '"Press Start 2P", cursive',
  textAlign: "center" as const,
  fontSize: "2rem",
  padding: "0 3rem",
  color: "#ffffff",
  backgroundColor: "#30415A",
};

export default Location;
