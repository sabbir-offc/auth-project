import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { BallTriangle } from "react-loader-spinner";
const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    );
  }
  console.log(user);
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-medium text-white mt-10">
        Name: {user.displayName}
      </h1>
      <h1 className="text-2xl font-medium text-white mt-10">
        Email: {user.email}
      </h1>
      {user?.photoURL && (
        <img
          src={user.photoURL}
          alt=""
          className="mx-auto mt-5 rounded-full w-40"
        />
      )}
    </div>
  );
};

export default Profile;
